# -*- coding: utf-8 -*-

from __future__ import print_function

import sys
import time

import cv2
import numpy as np
import rospy

from image_Tag_converter import ImgConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action


# 与 first_then_auto.py 中的绿色识别范围一致
GREEN_LOW = np.array([48, 102, 72], dtype=np.uint8)
GREEN_HIGH = np.array([99, 255, 155], dtype=np.uint8)

# 每组位置采集多少帧，取有效 X、Y 的中位数
FRAME_COUNT = 5

# 抱箱动作名称：请确认机器人上已下载此动作
PICK_ACTION = "boxup17"


def get_green_xy(img):
    """识别最大绿色色块，返回中心 X、Y；识别失败返回 None。"""
    if img is None:
        return None

    # 按正式程序的图像转换和颜色识别流程处理
    img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
    img_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    img_hsv = cv2.GaussianBlur(img_hsv, (3, 3), 0)

    mask = cv2.inRange(img_hsv, GREEN_LOW, GREEN_HIGH)

    # 和正式程序一致：形态学处理后的图像用于轮廓检测
    mask = cv2.dilate(
        mask,
        np.ones((4, 4), np.uint8),
        iterations=2,
    )

    contours_result = cv2.findContours(
        mask,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_NONE,
    )
    contours = contours_result[-2]

    if not contours:
        return None

    largest = max(contours, key=cv2.contourArea)
    (center_x, center_y), radius = cv2.minEnclosingCircle(largest)

    if radius <= 0:
        return None

    return float(center_x), float(center_y)


def capture_position(image_reader, frame_count=FRAME_COUNT):
    """采集多帧，返回 X、Y 中位数和有效帧数。"""
    xs = []
    ys = []

    for _ in range(frame_count):
        ret, img = image_reader.chest_image()
        result = get_green_xy(img)

        if result is not None:
            x_value, y_value = result
            xs.append(x_value)
            ys.append(y_value)
            print(
                "[识别] X={:.1f}, Y={:.1f}".format(
                    x_value,
                    y_value,
                )
            )
        else:
            print("[识别] 当前帧没有找到绿色物块")

        time.sleep(0.15)

    if not xs:
        return None

    return (
        float(np.median(xs)),
        float(np.median(ys)),
        len(xs),
    )


def main():
    rospy.init_node("test_box_range")
    image_reader = ImgConverter()

    results = []
    trial = 1

    print("=" * 60)
    print("抱箱位置测试程序")
    print("每轮先采集物块坐标，再由你确认是否执行抱箱动作。")
    print("按 Ctrl+C 可停止。")
    print("=" * 60)

    time.sleep(2.0)

    try:
        while not rospy.is_shutdown():
            print("")
            print("-" * 60)
            print("第 {} 组位置测试".format(trial))
            input(
                "请将机器人和物块摆到本组测试位置，"
                "确保机器人站稳后按回车采集坐标: "
            )

            position = capture_position(image_reader)

            if position is None:
                print("[结果] 没有有效坐标，本组不执行抱箱动作。")
                retry = input("按回车重新采集，输入 q 结束: ").strip().lower()
                if retry == "q":
                    break
                continue

            x_value, y_value, valid_frames = position
            print(
                "[本组坐标] X={:.1f}, Y={:.1f}，有效帧 {}/{}".format(
                    x_value,
                    y_value,
                    valid_frames,
                    FRAME_COUNT,
                )
            )

            choice = input(
                "确认机器人姿态安全后，输入 g 执行抱箱动作；"
                "输入 s 跳过本组；输入 q 结束: "
            ).strip().lower()

            if choice == "q":
                break

            if choice == "s":
                result = "跳过"
            elif choice == "g":
                print("[动作] 执行 {}".format(PICK_ACTION))
                base_action.action(PICK_ACTION)

                input(
                    "动作结束后检查抱箱结果；"
                    "检查完成后按回车继续: "
                )
                result = input(
                    "本组结果：输入 y 表示成功，输入 n 表示失败: "
                ).strip().lower()
                result = "成功" if result == "y" else "失败"
            else:
                print("[输入无效] 本组不执行动作。")
                result = "未执行"

            results.append((trial, x_value, y_value, result))
            print(
                "[记录] 第{}组 X={:.1f}, Y={:.1f}, 结果={}".format(
                    trial,
                    x_value,
                    y_value,
                    result,
                )
            )

            trial += 1

    except KeyboardInterrupt:
        print("")
        print("[停止] 收到 Ctrl+C")

    print("")
    print("=" * 60)
    print("测试汇总")
    print("组号\tX\tY\t抱箱结果")
    for row in results:
        print(
            "{}\t{:.1f}\t{:.1f}\t{}".format(
                row[0],
                row[1],
                row[2],
                row[3],
            )
        )
    print("=" * 60)


if __name__ == "__main__":
    main()