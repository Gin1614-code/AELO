# -*- coding: utf-8 -*-

import math
import sys
import threading
import time

import cv2
import numpy as np
import rospy

from image_Tag_converter import ImgConverter, TagConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action


# ==================== 全局参数 ====================

Chest_img = None
ChestOrg = None
marker = None
chest_circle_x = None
chest_circle_y = None
Debug = 0

# 轮次与路线状态
round = 1
ID = 0
step = 3
level = "start_box"
round_started = False
selected_action_group = None
is_start_moved = False

# 盲搜计数
id3_blind_count = 0
id4_blind_count = 0
id5_blind_count = 0

# Tag 识别与丢码状态
tag_was_seen = False
aligning_tag_id = 0
last_seen_time = None
last_seen_dis_x = None
last_seen_dis_y = None
last_seen_theta = None
lost_since = None
tag4_action_pending = False

# Tag 对正与丢码参数
TAG_LOST_COMPLETE_SECONDS = 0.6
TAG2_X_OFFSET = 0.08
TAG2_X_THRESHOLD = 0.01
TAG2_FORWARD_LIMIT = 0.165
TAG4_X_OFFSET = 0.11
TAG4_X_THRESHOLD = 0.05
TAG4_FORWARD_ERROR = 0.16
TAG4_OBSERVATION_WAIT_SECONDS = 0.8

color_range = {
    "green": [(48, 102, 72), (99, 255, 155)],
    "orange": [(0, 107, 122), (19, 255, 255)],
}


# ==================== 每轮终端确认 ====================

def wait_for_round_start(input_func=input, output=print):
    global round_started, selected_action_group

    output(f"\n========== 第{round}轮 ==========")
    if round == 1:
        output("[路线模式] firstauto3.9：第一轮视觉取箱路线")
    else:
        output("[路线模式] auto3.5：后续轮固定取箱路线")
    output("[动作组] 输入 1：不带 x_，搬运 1 个物块")
    output("[动作组] 输入 2：带 x_，搬运 2 个物块")

    while True:
        choice = input_func("请输入 1 或 2 开始本轮：").strip()
        if choice == "1":
            selected_action_group = 1
            round_started = True
            output(f"[轮次启动] 第{round}轮使用不带 x_ 的单物块动作组")
            return selected_action_group
        if choice == "2":
            selected_action_group = 2
            round_started = True
            output(f"[轮次启动] 第{round}轮使用带 x_ 的双物块动作组")
            return selected_action_group
        output("[输入无效] 只能输入 1 或 2，机器人尚未开始动作")


# ==================== 两套共用动作 ====================

def Box_Down(n):
    for i in range(0, n):
        print(f"[动作] 执行: 放下箱子 (第{i + 1}/{n}次)")
        base_action.action("boxdown")
        time.sleep(1)


def Box_Up(n):
    for i in range(0, n):
        print(f"[动作] 执行: 搬起箱子 (第{i + 1}/{n}次)")
        base_action.action("boxup17")
        time.sleep(1)


# ==================== 第一轮动作：不带 x_ ====================

def FirstBoxGo1(n):
    for _ in range(n):
        print("[第一轮动作] 前进1步")
        base_action.action("front1_quick1")
        time.sleep(0.1)


def FirstBoxGo2(n):
    for _ in range(n):
        print("[第一轮动作] 前进2步")
        base_action.action("front2_quick2")
        time.sleep(0.1)


def FirstBoxGo3(n):
    for _ in range(n):
        print("[第一轮动作] 前进3步")
        base_action.action("front3ad")
        time.sleep(0.1)


def FirstBoxGo4(n):
    for _ in range(n):
        print("[第一轮动作] 前进4步")
        base_action.action("front4_quick2")
        time.sleep(0.1)


def FirstBoxRMove1(n):
    for _ in range(n):
        print("[第一轮动作] 右移小步")
        base_action.action("smallright")
        time.sleep(0.3)


def FirstBoxRMove2(n):
    for _ in range(n):
        print("[第一轮动作] 右移大步")
        base_action.action("bigright_10")
        time.sleep(0.3)


def FirstBoxLMove1(n):
    for _ in range(n):
        print("[第一轮动作] 左移小步")
        base_action.action("smallleft")
        time.sleep(0.3)


def FirstBoxLMove2(n):
    for _ in range(n):
        print("[第一轮动作] 左移大步")
        base_action.action("bigleft16")
        time.sleep(0.3)


def FirstBoxRturn30_2(n):
    for _ in range(n):
        print("[第一轮动作] 右转30度")
        base_action.action("rightturn30_1")
        time.sleep(0.7)


def FirstBoxLturn30_2(n):
    for _ in range(n):
        print("[第一轮动作] 左转30度")
        base_action.action("leftturn30_1")
        time.sleep(0.7)


def FirstBoxRturn10_2(n):
    for _ in range(n):
        print("[第一轮动作] 右转10度")
        base_action.action("rightturn10_1")
        time.sleep(0.3)


def FirstBoxLturn10_2(n):
    for _ in range(n):
        print("[第一轮动作] 左转10度")
        base_action.action("leftturn10_1")
        time.sleep(0.3)


# ==================== 后续轮动作：带 x_ ====================

def AutoBoxGo1(n):
    for _ in range(n):
        print("[后续轮动作] 前进1步")
        base_action.action("x_front1step_3")
        time.sleep(0.1)


def AutoBoxGo2(n):
    for _ in range(n):
        print("[后续轮动作] 前进2步")
        base_action.action("x_front2step_3")
        time.sleep(0.1)


def AutoBoxGo3(n):
    for _ in range(n):
        print("[后续轮动作] 前进3步")
        base_action.action("x_front3step_3")
        time.sleep(0.1)


def AutoBoxGo4(n):
    for _ in range(n):
        print("[后续轮动作] 前进4步")
        base_action.action("x_front4step_3")
        time.sleep(0.1)


def AutoBoxRMove1(n):
    for _ in range(n):
        print("[后续轮动作] 右移小步")
        base_action.action("x_smallright")
        time.sleep(0.3)


def AutoBoxRMove2(n):
    for _ in range(n):
        print("[后续轮动作] 右移大步")
        base_action.action("x_bigright")
        time.sleep(0.3)


def AutoBoxLMove1(n):
    for _ in range(n):
        print("[后续轮动作] 左移小步")
        base_action.action("x_smallleft")
        time.sleep(0.3)


def AutoBoxLMove2(n):
    for _ in range(n):
        print("[后续轮动作] 左移大步")
        base_action.action("x_bigleft")
        time.sleep(0.3)


def AutoBoxRturn30_2(n):
    for _ in range(n):
        print("[后续轮动作] 右转30度")
        base_action.action("x_rightturn30_1")
        time.sleep(0.3)


def AutoBoxLturn30_2(n):
    for _ in range(n):
        print("[后续轮动作] 左转30度")
        base_action.action("x_leftturn30_1")
        time.sleep(0.3)


def AutoBoxRturn10_2(n):
    for _ in range(n):
        print("[后续轮动作] 右转10度")
        base_action.action("x_rightturn10_1")
        time.sleep(0.3)


def AutoBoxLturn10_2(n):
    for _ in range(n):
        print("[后续轮动作] 左转10度")
        base_action.action("x_leftturn10_1")
        time.sleep(0.3)


# ==================== 按每轮终端选择调用对应动作 ====================

def use_first_action_group():
    if selected_action_group == 1:
        return True
    if selected_action_group == 2:
        return False
    return round == 1


def BoxGo1(n):
    if use_first_action_group():
        FirstBoxGo1(n)
    else:
        AutoBoxGo1(n)


def BoxGo2(n):
    if use_first_action_group():
        FirstBoxGo2(n)
    else:
        AutoBoxGo2(n)


def BoxGo3(n):
    if use_first_action_group():
        FirstBoxGo3(n)
    else:
        AutoBoxGo3(n)


def BoxGo4(n):
    if use_first_action_group():
        FirstBoxGo4(n)
    else:
        AutoBoxGo4(n)


def BoxRMove1(n):
    if use_first_action_group():
        FirstBoxRMove1(n)
    else:
        AutoBoxRMove1(n)


def BoxRMove2(n):
    if use_first_action_group():
        FirstBoxRMove2(n)
    else:
        AutoBoxRMove2(n)


def BoxLMove1(n):
    if use_first_action_group():
        FirstBoxLMove1(n)
    else:
        AutoBoxLMove1(n)


def BoxLMove2(n):
    if use_first_action_group():
        FirstBoxLMove2(n)
    else:
        AutoBoxLMove2(n)


def BoxRturn30_2(n):
    if use_first_action_group():
        FirstBoxRturn30_2(n)
    else:
        AutoBoxRturn30_2(n)


def BoxLturn30_2(n):
    if use_first_action_group():
        FirstBoxLturn30_2(n)
    else:
        AutoBoxLturn30_2(n)


def BoxRturn10_2(n):
    if use_first_action_group():
        FirstBoxRturn10_2(n)
    else:
        AutoBoxRturn10_2(n)


def BoxLturn10_2(n):
    if use_first_action_group():
        FirstBoxLturn10_2(n)
    else:
        AutoBoxLturn10_2(n)


# ==================== 第一轮视觉取箱 ====================

def find_box(img, color_name):
    global chest_circle_x, chest_circle_y

    if Chest_img is None:
        print("[视觉] 等待获取图像中...")
        time.sleep(0.3)
    else:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
        box_img = cv2.GaussianBlur(box_img_hsv, (3, 3), 0)
        box_img_mask = cv2.inRange(
            box_img,
            color_range[color_name][0],
            color_range[color_name][1],
        )
        cv2.erode(box_img_mask, None, iterations=2)
        box_img_opened = cv2.dilate(
            box_img_mask,
            np.ones((4, 4), np.uint8),
            iterations=2,
        )
        contours, hierarchy = cv2.findContours(
            box_img_opened,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_NONE,
        )

        if len(contours) != 0:
            area = []
            for cn in contours:
                contour_area = math.fabs(cv2.contourArea(cn))
                area.append(contour_area)
            max_index = np.argmax(area)
            (chest_circle_x, chest_circle_y), chest_radius = (
                cv2.minEnclosingCircle(contours[max_index])
            )
            cv2.circle(
                img,
                (int(chest_circle_x), int(chest_circle_y)),
                int(chest_radius),
                (0, 0, 255),
            )
            print(
                f"[视觉] 成功识别目标色块({color_name}): "
                f"中心坐标 X={chest_circle_x:.1f}, "
                f"Y={chest_circle_y:.1f}"
            )

            if Debug:
                cv2.imshow("Box", img)
                cv2.waitKey(200)
        else:
            print(
                f"[视觉] 视野中未找到目标色块({color_name})，"
                "正在持续寻找..."
            )


def goto_box():
    global level

    if chest_circle_x is None:
        print("[微调对准] 等待视觉坐标刷新中...")
        time.sleep(0.3)
    else:
        print(
            f"[微调对准] 评估色块坐标 X={chest_circle_x:.1f} "
            "(目标区间 295~345)"
        )
        if chest_circle_x < 295:
            print("  -> 色块偏左，执行左侧移小步")
            BoxLMove1(1)
        elif chest_circle_x > 345:
            print("  -> 色块偏右，执行右侧移小步")
            BoxRMove1(1)
        elif chest_circle_y < 290:
            print(f"  -> 色块距离较远，前进1步，Y={chest_circle_y}")
            BoxGo1(1)
            time.sleep(0.5)
        else:
            print("[微调对准] 色块位置满足抱箱条件")
            Box_Up(1)
            level = "end_box"


# ==================== 取箱区路线 ====================

def process_start_box(input_func=input, output=print):
    global step, level, is_start_moved

    if not round_started:
        wait_for_round_start(input_func=input_func, output=output)

    if round == 1:
        if not is_start_moved:
            print("[第一轮] 执行开局固定补偿")
            BoxLMove1(2)
            BoxLMove2(2)
            is_start_moved = True

        if step == 2:
            step = 1
        elif step == 4:
            step = 3

        if Chest_img is not None:
            find_box(Chest_img, "green")
            goto_box()
        return

    Box_Up(1)
    level = "end_box"
    time.sleep(0.3)


def leave_pickup_area():
    global ID, step

    if round == 1:
        BoxLMove2(2)
        BoxGo3(1)
    else:
        time.sleep(0.7)
        BoxLMove2(5)
        BoxGo2(1)

    ID = 1
    step = 1


# ==================== 搜索号码 ====================

def search_for_id():
    print(f"[盲搜策略] 当前未看见目标 Tag，启动 ID={ID} 的原盲搜")
    if ID == 1:
        BoxGo3(1)
    elif ID == 2:
        BoxGo2(1)
    elif ID == 3:
        BoxRMove2(1)
    elif ID == 4:
        BoxGo3(1)
    elif ID == 5:
        BoxLMove1(1)


# ==================== 统一号码完成 ====================

def clear_tag_tracking():
    global tag_was_seen, aligning_tag_id
    global last_seen_time, last_seen_dis_x
    global last_seen_dis_y, last_seen_theta
    global lost_since, tag4_action_pending

    tag_was_seen = False
    aligning_tag_id = 0
    last_seen_time = None
    last_seen_dis_x = None
    last_seen_dis_y = None
    last_seen_theta = None
    lost_since = None
    tag4_action_pending = False


def complete_current_tag(tag_id):
    global ID, id4_blind_count

    clear_tag_tracking()

    if tag_id == 1:
        print("[号码完成] 1号对正完成，执行后置动作")
        #应依据视觉角度判断旋转30
        #BoxLturn30_2(1)
        BoxGo4(2)
        ID = 2
        return False

    if tag_id == 2:
        print("[号码完成] 2号对正完成，执行后置动作")
        BoxRMove2(2)
        #BoxGo1(1)
        ID = 3
        return False

    if tag_id == 3:
        print("[号码完成] 3号对正完成，执行后置动作")
        BoxGo3(2)
        BoxLturn30_2(1)
        if round >= 2:
            BoxGo1(1)
        ID = 4
        id4_blind_count = 0
        return False

    if tag_id == 4:
        print("[号码完成] 4号对正完成，执行后置动作")
        BoxLMove2(2)
        #BoxRturn10_2(1)
        BoxGo2(1)
        ID = 5
        return False

    if tag_id == 5:
        print("[号码完成] 5号对正完成，执行放箱动作")
        #BoxLturn30_2(1)
        BoxGo4(2)
        Box_Down(1)
        return True

    raise ValueError(f"不支持的 Tag ID: {tag_id}")


def reset_round_state(sleep_func=time.sleep):
    global round, ID, step, level, round_started
    global selected_action_group
    global id3_blind_count, id4_blind_count, id5_blind_count

    round += 1
    ID = 0
    step = 3
    level = "start_box"
    round_started = False
    selected_action_group = None
    id3_blind_count = 0
    id4_blind_count = 0
    id5_blind_count = 0
    clear_tag_tracking()
    sleep_func(3)
    print(
        f"[轮次重置] 等待下一次输入 1 或 2，"
        f"第{round}轮路线将使用 auto3.5"
    )


# ==================== Tag 对正 ====================

def turn_to_tag(
    dis_x,
    dis_y,
    theta,
    x_offset=0,
    y_offset=0,
    theta_offset=5,
    x_threshold=0.03,
    y_threshold=0.1,
    theta_threshold=5,
):
    is_turn_done = False

    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    theta_error = theta - theta_offset

    print(f"\n--- [Tag 对准计算] 目标 Tag ID: {ID} ---")
    print(
        f"原始数据: dis_x={dis_x:.3f}, "
        f"dis_y={dis_y:.3f}, theta={theta:.1f}"
    )
    print(
        f"当前误差: X误差={x_error:.3f} | "
        f"Y误差={y_error:.3f} | 角度误差={theta_error:.1f}"
    )
    print("--------------------------------------------------")

    if step != 1:
        return False

    if ID == 1:
        abs_y = abs(y_error)
        if abs_y < 0.03:
            dyn_theta = 25
        elif abs_y < 0.06:
            dyn_theta = 20
        elif abs_y < 0.10:
            dyn_theta = 15
        elif abs_y <= 0.14:
            dyn_theta = 8
        else:
            dyn_theta = 5

        y_in = abs_y <= 0.14
        theta_in = abs(theta_error) <= dyn_theta
        print(
            f"[1号动态准入] |Y|={abs_y:.3f}m，"
            f"角度容差=±{dyn_theta}°，"
            f"Y达标={y_in}，角度达标={theta_in}"
        )

        if y_in and theta_in:
            time.sleep(0.2)
            BoxGo3(1)
            is_turn_done = True
        else:
            y_severity = abs_y / 0.14
            theta_severity = abs(theta_error) / dyn_theta

            if y_severity > theta_severity and not y_in:
                if y_error > 0:
                    if abs_y > 0.20:
                        BoxLMove2(1)
                    else:
                        BoxLMove1(1)
                else:
                    if abs_y > 0.20:
                        BoxRMove2(1)
                    else:
                        BoxRMove1(1)
            else:
                if theta_error > 0:
                    if theta_error > dyn_theta + 5:
                        BoxLturn30_2(1)
                    else:
                        BoxLturn10_2(1)
                else:
                    if theta_error < -dyn_theta - 3:
                        BoxRturn30_2(1)
                    else:
                        BoxRturn10_2(1)

    elif ID == 2:
        if theta_error > theta_threshold - 8:
            if theta_error > theta_threshold + 2:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -(theta_threshold - 8):
            if theta_error < -theta_threshold:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif dis_x > TAG2_FORWARD_LIMIT:
            BoxGo1(1)
        elif y_error < -y_threshold + 0.05:
            if y_error < -y_threshold - 0.05:
                BoxRMove2(1)
            else:
                BoxRMove1(1)
        else:
            time.sleep(0.2)
            is_turn_done = True

    elif ID == 3:
        if y_error < y_threshold - 0.02:
            if y_error < -0.05:
                BoxRMove2(1)
            else:
                BoxRMove1(1)
        elif theta_error > 15:
            BoxLturn30_2(1)
        elif theta_error < -theta_threshold - 10:
            BoxRturn30_2(1)
        else:
            is_turn_done = True

    elif ID == 4:
        if theta_error > theta_threshold:
            if theta_error > theta_threshold + 10:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -theta_threshold:
            if round == 1:
                right_big_extra = 8
            else:
                right_big_extra = 5

            if theta_error < -theta_threshold - right_big_extra:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif y_error > y_threshold - 0.05:
            if y_error > y_threshold + 0.05:
                BoxLMove2(1)
            else:
                BoxLMove1(1)
        elif x_error > TAG4_FORWARD_ERROR:
            if x_error > 0.25:
                BoxGo2(1)
            else:
                BoxGo1(1)
        else:
            time.sleep(0.2)
            is_turn_done = True

    elif ID == 5:
        abs_y = abs(y_error)
        if abs_y < 0.03:
            dyn_theta = 25
        elif abs_y < 0.05:
            dyn_theta = 18
        elif abs_y < 0.09:
            dyn_theta = 12
        elif abs_y <= 0.12:
            dyn_theta = 8
        else:
            dyn_theta = 5

        y_in = abs_y <= 0.12
        theta_in = abs(theta_error) <= dyn_theta
        x_in = x_error <= x_threshold
        print(
            f"[5号动态准入] |Y|={abs_y:.3f}m，"
            f"角度容差=±{dyn_theta}°，"
            f"Y达标={y_in}，角度达标={theta_in}，"
            f"距离达标={x_in}"
        )

        if y_in and theta_in:
            if not x_in:
                theta_margin = abs(theta_error) - (dyn_theta - 5)
                if theta_margin > 0:
                    if theta_error > 0:
                        BoxLturn10_2(1)
                    else:
                        BoxRturn10_2(1)
                elif x_error > 0.02:
                    if x_error > x_threshold + 0.1:
                        BoxGo2(1)
                    else:
                        BoxGo1(1)
                else:
                    time.sleep(0.2)
                    is_turn_done = True
            else:
                time.sleep(0.2)
                is_turn_done = True
        else:
            y_severity = abs_y / 0.12
            theta_severity = abs(theta_error) / dyn_theta

            if y_severity > theta_severity and not y_in:
                if y_error > 0:
                    BoxLMove1(1)
                else:
                    BoxRMove1(1)
            else:
                if theta_error > 0:
                    if theta_error > dyn_theta + 20:
                        BoxLturn30_2(1)
                    else:
                        BoxLturn10_2(1)
                else:
                    if theta_error < -dyn_theta - 5:
                        BoxRturn30_2(1)
                    else:
                        BoxRturn10_2(1)

    return is_turn_done


# ==================== Tag 数据与原盲搜 ====================

def mark_target_seen(
    tag_id,
    dis_x=None,
    dis_y=None,
    theta=None,
    now=None,
):
    global tag_was_seen, aligning_tag_id
    global last_seen_time, last_seen_dis_x
    global last_seen_dis_y, last_seen_theta, lost_since

    if now is None:
        now = time.monotonic()

    tag_was_seen = True
    aligning_tag_id = tag_id
    last_seen_time = now
    last_seen_dis_x = dis_x
    last_seen_dis_y = dis_y
    last_seen_theta = theta
    lost_since = None


def process_marker(current_marker, now=None):
    global marker, ID, level
    global id3_blind_count, id4_blind_count, id5_blind_count
    global tag4_action_pending

    if step != 1:
        return False

    marker = current_marker
    marker_id = marker[0]
    robot_tag_x = marker[1]
    robot_tag_y = marker[2]
    tag_yaw = marker[3] + 90

    print(
        f"[Tag] 当前目标 ID={ID}，"
        f"识别到 ID={marker_id}，"
        f"X={robot_tag_x:.3f}，Y={robot_tag_y:.3f}，"
        f"角度={tag_yaw:.1f}"
    )

    if (
        ID == 4
        and marker_id != 4
        and tag_was_seen
        and aligning_tag_id == 4
    ):
        print(
            f"[4号错误码保护] 当前看到 ID={marker_id}，"
            "不执行前进盲搜，按四号码暂时丢失处理"
        )
        return process_missing_marker(now=now)

    if marker_id == 1:
        if ID != 1:
            search_for_id()
            return False

        level = "start_moving"
        mark_target_seen(
            1,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=tag_yaw,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            tag_yaw,
            0.08,
            -0.01,
            0,
            0.03,
            0.1,
            15,
        )
        if done:
            return complete_current_tag(1)
        return False

    if marker_id == 2:
        if ID == 1 or ID == 2:
            ID = 2
        if ID != 2:
            search_for_id()
            return False

        mark_target_seen(
            2,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=tag_yaw,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            tag_yaw,
            TAG2_X_OFFSET,
            0.0,
            0,
            TAG2_X_THRESHOLD,
            0.1,
            15,
        )
        if done:
            return complete_current_tag(2)
        return False

    if marker_id == 3:
        if ID != 3:
            search_for_id()
            return False

        id3_blind_count = 0
        mark_target_seen(
            3,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=tag_yaw,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            tag_yaw,
            0.12,
            0.12,
            0,
            0.03,
            0.1,
            10,
        )
        if done:
            return complete_current_tag(3)
        return False

    if marker_id == 4:
        if ID != 4:
            search_for_id()
            return False

        id4_blind_count = 0
        tag4_action_pending = False
        mark_target_seen(
            4,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=tag_yaw,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            tag_yaw,
            TAG4_X_OFFSET,
            0.1,
            0,
            TAG4_X_THRESHOLD,
        )
        if done:
            return complete_current_tag(4)
        tag4_action_pending = True
        return False

    if marker_id == 5:
        if ID != 5:
            search_for_id()
            return False

        id5_blind_count = 0
        mark_target_seen(
            5,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=tag_yaw,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            tag_yaw,
            0.13,
            0.02,
            0,
            0.03,
            0.03,
            8,
        )
        if done:
            return complete_current_tag(5)
        return False

    search_for_id()
    return False


def process_never_seen_missing():
    global ID, id3_blind_count, id4_blind_count, id5_blind_count

    if ID == 3:
        id3_blind_count += 1
        print(f"[ID=3盲搜] 第{id3_blind_count}次")
        if id3_blind_count >= 1:
            BoxRMove2(2)
            #BoxRMove1(1)
            #BoxLturn30_2(1)
            id3_blind_count = 0
            id4_blind_count = 0
            ID = 4
        else:
            search_for_id()
        return False

    if ID == 4:
        id4_blind_count += 1
        print(f"[ID=4盲搜] 第{id4_blind_count}次")
        search_for_id()
        return False

    if ID == 5:
        id5_blind_count += 1
        print(f"[ID=5盲搜] 第{id5_blind_count}次")
        if id5_blind_count == 1:
            BoxGo2(1)
        elif id5_blind_count == 2:
            BoxGo2(1)
        elif id5_blind_count == 3:
            BoxRMove1(2)
        else:
            id5_blind_count = 0
            return complete_current_tag(5)
        return False

    search_for_id()
    return False


# ==================== 已见码后的丢码保护 ====================

def tag4_last_pose_is_ready():
    if (
        last_seen_dis_x is None
        or last_seen_dis_y is None
        or last_seen_theta is None
    ):
        return False

    return (
        last_seen_dis_x <= TAG4_X_OFFSET + TAG4_FORWARD_ERROR
        and last_seen_dis_y <= 0.15
        and abs(last_seen_theta) <= 5
    )


def process_tag4_missing(now):
    global lost_since, tag4_action_pending

    if lost_since is None:
        lost_since = now

    lost_duration = now - lost_since

    if tag4_last_pose_is_ready():
        if lost_duration < TAG_LOST_COMPLETE_SECONDS:
            print(
                f"[4号丢码保持] 最后姿态已达标，"
                f"继续保持至 {TAG_LOST_COMPLETE_SECONDS:.1f} 秒"
            )
            time.sleep(0.05)
            return False

        print(
            f"[4号丢码完成] X={last_seen_dis_x:.3f}m，"
            f"Y={last_seen_dis_y:.3f}m，"
            f"角度={last_seen_theta:.1f}°，"
            "最后姿态达标"
        )
        return complete_current_tag(4)

    if lost_duration < TAG4_OBSERVATION_WAIT_SECONDS:
        if tag4_action_pending:
            print(
                f"[4号观测等待] 动作后暂未重新看到四号码，"
                f"已等待 {lost_duration:.2f} 秒"
            )
        else:
            print(
                f"[4号丢码保持] 等待四号码恢复，"
                f"已等待 {lost_duration:.2f} 秒"
            )
        time.sleep(0.05)
        return False

    if last_seen_dis_x is None:
        print(
            "[4号丢码保护] 缺少最后距离，"
            "保持不动并等待重新识别"
        )
        time.sleep(0.05)
        return False

    if last_seen_dis_x > 0.36:
        print(
            f"[4号远距恢复] 最后X={last_seen_dis_x:.3f}m，"
            "前进2步后等待新的四号码观测"
        )
        BoxGo2(1)
        tag4_action_pending = True
        lost_since = None
        return False

    if last_seen_dis_x > TAG4_X_OFFSET + TAG4_FORWARD_ERROR:
        print(
            f"[4号中距恢复] 最后X={last_seen_dis_x:.3f}m，"
            "前进1步后等待新的四号码观测"
        )
        BoxGo1(1)
        tag4_action_pending = True
        lost_since = None
        return False

    y_text = "未知"
    theta_text = "未知"
    if last_seen_dis_y is not None:
        y_text = f"{last_seen_dis_y:.3f}m"
    if last_seen_theta is not None:
        theta_text = f"{last_seen_theta:.1f}°"
    print(
        f"[4号近距丢码] 最后X={last_seen_dis_x:.3f}m，"
        f"Y={y_text}，角度={theta_text}，"
        "姿态未达标，禁止前进并等待重新识别"
    )
    tag4_action_pending = False
    time.sleep(0.05)
    return False


def process_missing_marker(now=None):
    global lost_since

    if now is None:
        now = time.monotonic()

    if tag_was_seen and aligning_tag_id == ID:
        if ID == 4:
            return process_tag4_missing(now)

        if ID == 2:
            forward_limit = TAG2_FORWARD_LIMIT
            if (
                last_seen_dis_x is None
                or last_seen_dis_x > forward_limit
            ):
                lost_since = None
                if last_seen_dis_x is None:
                    print(
                        f"[{ID}号丢码] 缺少最后距离，"
                        "不能判断已经走过头，继续向前盲搜"
                    )
                else:
                    print(
                        f"[{ID}号远距丢码] "
                        f"最后X={last_seen_dis_x:.3f}m，"
                        f"仍大于前进界限{forward_limit:.3f}m，"
                        "继续向前盲搜"
                    )
                search_for_id()
                return False

        if lost_since is None:
            lost_since = now
            print(
                f"[丢码保持] ID={ID} 已进入对正，"
                f"先保持 {TAG_LOST_COMPLETE_SECONDS:.1f} 秒"
            )
            time.sleep(0.05)
            return False

        lost_duration = now - lost_since
        if lost_duration < TAG_LOST_COMPLETE_SECONDS:
            print(
                f"[丢码保持] ID={ID} 已丢失 "
                f"{lost_duration:.2f} 秒，机器人保持不动"
            )
            time.sleep(0.05)
            return False

        target_id = ID
        print(
            f"[丢码直接完成] ID={target_id} 已连续丢失 "
            f"{lost_duration:.2f} 秒，假定已经对正"
        )
        return complete_current_tag(target_id)

    print(f"[从未见码] 当前目标 ID={ID}，执行原盲搜")
    return process_never_seen_missing()


# ==================== 图像线程和主循环 ====================

def get_img():
    global Chest_img, ChestOrg

    image_reader_chest = ImgConverter()
    while not rospy.is_shutdown():
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(0.3)
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(0.05)
        else:
            time.sleep(0.3)


def start_image_thread():
    image_thread = threading.Thread(target=get_img)
    image_thread.setDaemon(True)
    image_thread.start()
    return image_thread


def run_loop(Tag):
    while not rospy.is_shutdown():
        if ID == 0:
            if level == "start_box":
                process_start_box()
            elif level == "end_box":
                leave_pickup_area()
            continue

        current_marker = Tag.get_nearest_marker()
        if len(current_marker) == 0:
            round_complete = process_missing_marker()
        else:
            round_complete = process_marker(current_marker)

        if round_complete:
            reset_round_state()

        time.sleep(0)


def main():
    print("====== 机器人合并程序开始初始化 ======")
    print("[固定规则] 第1轮 first，第2轮及以后 auto")
    print("[固定参数] 不读取标定，不启用自学习")

    rospy.init_node("image_listener")
    Tag = TagConverter()
    start_image_thread()

    time.sleep(0.5)
    print("[系统] 等待摄像头初始化 5 秒...")
    time.sleep(5)

    while ChestOrg is None and not rospy.is_shutdown():
        print("[系统] 等待胸部摄像头图像...")
        time.sleep(0.1)

    if rospy.is_shutdown():
        return

    print("[系统] 视觉已接入，等待每轮终端输入 1 或 2")
    run_loop(Tag)


if __name__ == "__main__":
    main()