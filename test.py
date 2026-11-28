# -*- coding: utf-8 -*-
"""85.py 动作库测试脚本。

按编号选择 85.py 里的动作，重复执行 N 次；
可选在每个动作前后读 Tag 数据，算出这个动作实际让机器人走了多远 / 转了多少度。

用法：
    python test_action_library.py
"""

from __future__ import print_function

import sys
import time

import rospy

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action

try:
    from image_Tag_converter import TagConverter
    TAG_AVAILABLE = True
except Exception:
    TagConverter = None
    TAG_AVAILABLE = False


# ==================== 85.py 动作库清单 ====================
# (编号, 动作名, 中文说明, 所属动作组)

ACTION_LIBRARY = [
    # ---- 通用（两组共用）----
    (1, "boxdown", "放下箱子", "通用"),

    # ---- 抱箱一个动作组 SingleBox ----
    (2, "one_boxup", "搬起箱子", "SingleBox"),
    (3, "one_front1", "前进1步", "SingleBox"),
    (4, "one_front2", "前进2步", "SingleBox"),
    (5, "one_front3", "前进3步", "SingleBox"),
    (6, "one_front4", "前进4步", "SingleBox"),
    (7, "one_smallright", "右移小步", "SingleBox"),
    (8, "one_bigright", "右移大步", "SingleBox"),
    (9, "one_smallleft", "左移小步", "SingleBox"),
    (10, "one_bigleft", "左移大步", "SingleBox"),
    (11, "one_rightturn30", "右转30度", "SingleBox"),
    (12, "one_leftturn30", "左转30度", "SingleBox"),
    (13, "one_rightturn10", "右转10度", "SingleBox"),
    (14, "one_leftturn10", "左转10度", "SingleBox"),

    # ---- 抱箱二或四个动作组 MultiBox ----
    (15, "four_boxup", "搬起箱子", "MultiBox"),
    (16, "four_front1", "前进1步", "MultiBox"),
    (17, "four_front2", "前进2步", "MultiBox"),
    (18, "four_front3", "前进3步", "MultiBox"),
    (19, "four_front4", "前进4步", "MultiBox"),
    (20, "four_smallright", "右移小步", "MultiBox"),
    (21, "four_bigright", "右移大步", "MultiBox"),
    (22, "four_smallleft", "左移小步", "MultiBox"),
    (23, "four_bigleft", "左移大步", "MultiBox"),
    (24, "four_rightturn30", "右转30度", "MultiBox"),
    (25, "four_leftturn30", "左转30度", "MultiBox"),
    (26, "four_rightturn10", "右转10度", "MultiBox"),
    (27, "four_leftturn10", "左转10度", "MultiBox"),
]


# ==================== 参数 ====================

ACTION_GAP_S = 0.5              # 两次动作之间的间隔（秒）
ACTION_SERVICE_WAIT_SECONDS = 30
TAG_FRAMES = 3                  # 动作前后各读几帧 Tag
TAG_FRAME_GAP_S = 0.08


# ==================== 菜单 ====================

def show_menu():
    print("")
    print("=" * 56)
    print("85.py 动作库")
    print("=" * 56)

    current_group = None
    for number, action_name, desc, group in ACTION_LIBRARY:
        if group != current_group:
            current_group = group
            if group == "通用":
                title = "【通用】"
            elif group == "SingleBox":
                title = "【抱箱一个动作组 SingleBox】"
            else:
                title = "【抱箱二或四个动作组 MultiBox】"
            print("")
            print(title)
        print("  {:<3}. {:<18} {}".format(number, action_name, desc))

    print("")
    print("=" * 56)


def ask_action():
    """返回动作名；返回 None 表示退出。"""
    while True:
        text = input("请输入动作编号（或直接输入动作名，q 退出）：").strip()

        if text.lower() == "q":
            return None
        if text == "":
            print("[输入无效] 不能为空")
            continue

        # 纯数字 → 查表
        if text.isdigit():
            number = int(text)
            for n, action_name, desc, group in ACTION_LIBRARY:
                if n == number:
                    print("[选中] {} → {}".format(action_name, desc))
                    return action_name
            print("[输入无效] 没有编号 {}".format(number))
            continue

        # 非数字 → 当作自定义动作名
        print("[自定义动作] {}".format(text))
        return text


def ask_repeat_count():
    while True:
        text = input("请输入重复次数（回车默认 1）：").strip()
        if text == "":
            return 1
        try:
            count = int(text)
        except ValueError:
            print("[输入无效] 请输入正整数")
            continue
        if count <= 0:
            print("[输入无效] 次数必须大于 0")
            continue
        return count


def ask_yes_no(prompt):
    while True:
        text = input(prompt).strip().lower()
        if text in ("y", "yes"):
            return True
        if text in ("n", "no", ""):
            return False
        print("[输入无效] 请输入 y 或 n")


# ==================== Tag 测量 ====================

def read_tag_value(tag_reader, frames=TAG_FRAMES):
    """读若干帧，返回最后一帧有效值 (id, x, y, yaw)；全部无效返回 None。"""
    last_valid = None
    for i in range(frames):
        marker = tag_reader.get_nearest_marker()
        if marker is not None and len(marker) >= 4:
            try:
                mid = int(marker[0])
                x_value = float(marker[1])
                y_value = float(marker[2])
                yaw_value = float(marker[3]) + 90.0
                last_valid = (mid, x_value, y_value, yaw_value)
            except (TypeError, ValueError, OverflowError):
                pass
        if i + 1 < frames:
            time.sleep(TAG_FRAME_GAP_S)
    return last_valid


def print_tag_delta(before, after):
    if before is None or after is None:
        print("[差值] 无法计算：动作前或动作后没有读到有效的 Tag")
        return
    if before[0] != after[0]:
        print("[差值] 无法计算：Tag ID 变化 {} → {}".format(before[0], after[0]))
        return

    dx = after[1] - before[1]
    dy = after[2] - before[2]
    dtheta = after[3] - before[3]
    print(
        "[差值] id={}  dx={:+.3f}m  dy={:+.3f}m  dtheta={:+.1f}°".format(
            before[0], dx, dy, dtheta
        )
    )


# ==================== 执行 ====================

def run_action(action_name, count, tag_reader=None):
    """执行动作 count 次。返回 False 表示被中断。"""
    print("")
    print("=" * 56)
    print("[开始] {} × {}".format(action_name, count))
    print("=" * 56)

    try:
        for i in range(1, count + 1):
            if rospy.is_shutdown():
                print("[系统] ROS 已关闭，停止测试")
                return False

            before = None
            if tag_reader is not None:
                before = read_tag_value(tag_reader)

            print("[动作] 第 {}/{} 次: {}".format(i, count, action_name))
            base_action.action(action_name)

            if tag_reader is not None:
                time.sleep(ACTION_GAP_S)
                after = read_tag_value(tag_reader)
                print_tag_delta(before, after)
            else:
                time.sleep(ACTION_GAP_S)

    except rospy.ROSInterruptException:
        print("[系统] ROS 已关闭，停止测试")
        return False
    except KeyboardInterrupt:
        print("\n[系统] 收到手动停止指令，停止测试")
        return False

    print("[完成] 已执行 {} 次 {}".format(count, action_name))
    return True


# ==================== 入口 ====================

def main():
    print("====== 85.py 动作库测试 ======")
    print("[提示] 动作名必须和机器人已下载的动作完全一致，错一个字符机器人不会动")
    print("[提示] 首次测试请扶住机器人或准备好急停")

    rospy.init_node("action_library_test")

    print(
        "[系统] 等待动作服务 action_receive (最长 {} 秒)...".format(
            ACTION_SERVICE_WAIT_SECONDS
        )
    )
    try:
        rospy.wait_for_service(
            "action_receive",
            timeout=ACTION_SERVICE_WAIT_SECONDS,
        )
    except rospy.ROSInterruptException:
        print("[系统] ROS 已关闭，取消测试")
        return
    except rospy.ROSException:
        print(
            "[系统错误] {} 秒内未检测到 action_receive 动作服务。"
            "请确认机器人已完成重启、动作服务已启动，再重新运行程序。".format(
                ACTION_SERVICE_WAIT_SECONDS
            )
        )
        return

    print("[系统] 动作服务 action_receive 已就绪")

    # ---------- 是否启用 Tag 前后测量 ----------
    tag_reader = None
    if TAG_AVAILABLE:
        if ask_yes_no("是否启用动作前后 Tag 对比测量？（y = 启用，n = 不启用）："):
            try:
                tag_reader = TagConverter()
                time.sleep(1.0)
                print("[Tag] 测量已启用 —— 每个动作前后各读 {} 帧".format(TAG_FRAMES))
                print("[Tag] 提示：让 Tag 保持在胸部摄像头视野内，否则差值无法计算")
            except Exception as e:
                tag_reader = None
                print("[Tag] 初始化失败，已关闭测量：{}".format(e))
        else:
            print("[Tag] 测量未启用")
    else:
        print("[Tag] 未找到 image_Tag_converter，跳过测量功能")

    # ---------- 主循环 ----------
    try:
        while True:
            if rospy.is_shutdown():
                print("[系统] ROS 已关闭，停止测试")
                return

            show_menu()
            action_name = ask_action()
            if action_name is None:
                print("[退出] 已取消测试")
                return

            count = ask_repeat_count()

            if not run_action(action_name, count, tag_reader=tag_reader):
                return

            if not ask_yes_no("是否继续测试下一个动作？（y = 继续，n = 退出）："):
                print("[退出] 测试结束")
                return

    except KeyboardInterrupt:
        print("\n[系统] 收到手动停止指令，停止测试")
        return


if __name__ == "__main__":
    main()