import time
import cv2
import threading
import numpy as np
import rospy
import math
from functools import wraps
import sys

from image_Tag_converter import ImgConverter
from image_Tag_converter import TagConverter

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action

# ==================== 全局参数 ====================

Chest_img = None
ChestOrg = None
marker = None
chest_circle_x = None
chest_circle_y = None
Debug = 0
tag_was_seen = False
aligning_tag_id = 0
last_align_action = "move"
id4_blind_count = 0
id3_blind_count = 0
id5_blind_count = 0

color_range = {
    'green': [(48, 102, 72), (99, 255, 155)],
    'orange': [(0, 107, 122), (19, 255, 255)]
}


# ==================== 基础动作函数 ====================

# --- 放下箱子 ---
def Box_Down(n):
    for i in range(0, n):
        print(f"[动作] 执行: 放下箱子 (第{i + 1}/{n}次)")
        base_action.action("boxdown")
        time.sleep(1)


# --- 搬起箱子 ---
def Box_Up(n):
    for i in range(0, n):
        print(f"[动作] 执行: 搬起箱子 (第{i + 1}/{n}次)")
        base_action.action("x_LiftCube3")
        time.sleep(1)


# ==================== 线上赛动作（抱箱子专用） ====================

def BoxGo1(n):
    for i in range(0, n):
        print("[动作] 前进1步")
        base_action.action("x_front1step_3")
        time.sleep(0.1)


def BoxGo2(n):
    for i in range(0, n):
        print("[动作] 前进2步")
        base_action.action("x_front2step_3")
        time.sleep(0.1)


def BoxGo3(n):
    for i in range(0, n):
        print("[动作] 前进3步")
        base_action.action("x_front3step_3")
        time.sleep(0.1)


def BoxGo4(n):
    for i in range(0, n):
        print("[动作] 前进4步")
        base_action.action("x_front4step_3")
        time.sleep(0.1)


def BoxRMove1(n):
    for i in range(0, n):
        print("[动作] 右移小步")
        base_action.action("x_smallright")
        time.sleep(0.3)


def BoxRMove2(n):
    for i in range(0, n):
        print("[动作] 右移大步")
        base_action.action("x_bigright")
        time.sleep(0.3)


def BoxLMove1(n):
    for i in range(0, n):
        print("[动作] 左移小步")
        base_action.action("x_smallleft")
        time.sleep(0.3)


def BoxLMove2(n):
    for i in range(0, n):
        print("[动作] 左移大步")
        base_action.action("x_bigleft")
        time.sleep(0.3)


def BoxRturn30_2(n):
    for i in range(0, n):
        print("[动作] 右转30度")
        base_action.action("x_rightturn30_1")
        time.sleep(0.3)


def BoxLturn30_2(n):
    for i in range(0, n):
        print("[动作] 左转30度")
        base_action.action("x_leftturn30_1")
        time.sleep(0.3)


def BoxRturn10_2(n):
    for i in range(0, n):
        print("[动作] 右转10度")
        base_action.action("x_rightturn10_1")
        time.sleep(0.3)


def BoxLturn10_2(n):
    for i in range(0, n):
        print("[动作] 左转10度")
        base_action.action("x_leftturn10_1")
        time.sleep(0.3)


# ==================== 搜索号码 ====================

def search_for_id(ID):
    print(f"[盲搜策略] 当前未看见目标 Tag，启动盲搜 ID={ID} 的策略")
    if ID == 1:
        print("  -> 搜索一号码: 前进3步")
        BoxGo3(1)
    elif ID == 2:
        print("  -> 搜索二号码: 前进2步")
        BoxGo2(1)
    elif ID == 3:
        print("  -> 搜索三号码: 右移大步")
        BoxRMove2(1)
    elif ID == 4:
        print("  -> 搜索四号码: 前进3步")
        BoxGo3(1)
    elif ID == 5:
        print("  -> 搜索五号码: 左移大步")
        BoxLMove1(1)


# ==================== 图像获取线程 ====================

def get_img():
    global Chest_img, ChestOrg
    global ret
    image_reader_chest = ImgConverter()
    while True:
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(0.3)
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(0.05)
        else:
            time.sleep(0.3)
            print("get_img - 暂时未获取到图像")


th2 = threading.Thread(target=get_img)
th2.setDaemon(True)
th2.start()


# ==================== 方块查找 ====================

def find_box(img, color_name):
    global chest_circle_x, chest_circle_y
    if Chest_img is None:
        print('等待获取图像中...')
        time.sleep(0.3)
    else:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
        box_img = cv2.GaussianBlur(box_img_hsv, (3, 3), 0)
        box_img_mask = cv2.inRange(box_img, color_range[color_name][0], color_range[color_name][1])
        box_img_closed = cv2.erode(box_img_mask, None, iterations=2)
        box_img_opened = cv2.dilate(box_img_mask, np.ones((4, 4), np.uint8), iterations=2)
        (contours, hierarchy) = cv2.findContours(box_img_opened, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        if len(contours) != 0:
            area = []
            for cn in contours:
                contour_area = math.fabs(cv2.contourArea(cn))
                area.append(contour_area)
            max_index = np.argmax(area)
            (chest_circle_x, chest_circle_y), chest_radius = cv2.minEnclosingCircle(contours[max_index])
            cv2.circle(img, (int(chest_circle_x), int(chest_circle_y)), int(chest_radius), (0, 0, 255))
            print('A', 'x=', chest_circle_x, 'y=', chest_circle_y)

            if Debug:
                cv2.imshow("Box", img)
                cv2.waitKey(200)

        else:
            print('正在寻找目标')


# ==================== 搬箱子 ====================

def goto_box():
    print("gotobox")
    global level, ID
    if chest_circle_x is None:
        print('等待获取坐标中...')
        time.sleep(0.3)
    else:
        if chest_circle_x < 275:
            print("正在左侧移(大幅)", chest_circle_x)
            BoxLMove2(1)
        elif chest_circle_x < 295:
            print("正在左侧移(小幅)", chest_circle_x)
            BoxLMove1(1)
        elif chest_circle_x > 365:
            print("正在右侧移(大幅)", chest_circle_x)
            BoxRMove2(1)
            time.sleep(0.5)
        elif chest_circle_x > 345:
            print("正在右侧移(小幅)", chest_circle_x)
            BoxRMove1(1)
        else:
            print("开始抱箱子")
            Box_Up(1)
            level = "end_box"


# ==================== Tag对正 ====================

def turn_to_tag(dis_x, dis_y, theta, x_offset=0, y_offset=0, theta_offset=5,
                x_threshold=0.03, y_threshold=0.1, theta_threshold=5):
    global last_align_action
    is_turn_done = False
    check_flag = 0

    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    theta_error = theta - theta_offset

    print(f"\n--- [Tag 对准计算] 目标Tag ID: {ID} (当前看到:{marker[0]}) ---")
    print(f"原始数据: dis_x={dis_x:.3f}, dis_y={dis_y:.3f}, theta={theta:.1f}")
    print(f"当前误差: X误差={x_error:.3f} | Y误差={y_error:.3f} | 角度误差={theta_error:.1f}")
    print("--------------------------------------------------")
    if step == 1:

        # --- ID == 1: 一号码对正 (通道动态准入, ±14cm对称) ---
        #
        #  一号码是一个 ±14cm 的通道，左右14cm内直行都能通过。
        #  越靠近通道中心 → 角度越宽松；越靠边 → 角度越收紧。
        #  在通道内且角度达标 → 直行进入，无需反复微调。
        #
        if ID == 1:
            print("1")

            abs_y = abs(y_error)

            # 动态角度容差：通道中央宽容，边缘收紧
            if abs_y < 0.03:
                dyn_theta = 25        # 通道中央，角度非常宽松
            elif abs_y < 0.06:
                dyn_theta = 20        # 轻微偏移
            elif abs_y < 0.10:
                dyn_theta = 15        # 中等偏移
            elif abs_y <= 0.14:
                dyn_theta = 8         # 通道边缘，需要比较正
            else:
                dyn_theta = 5         # 超出通道，必须先修 Y

            y_in = abs_y <= 0.14              # 是否在 28cm 通道内
            theta_in = abs(theta_error) <= dyn_theta

            print(f"  [通道动态准入] |Y偏移|={abs_y:.3f}m -> 角度容差±{dyn_theta}° | "
                  f"通道内:{y_in} 角度达标:{theta_in}(当前{theta_error:.1f}°)")

            if y_in and theta_in:
                print(f"  -> [完成] 通道准入通过，直行越过一号码")
                time.sleep(0.2)
                BoxGo3(1)
                is_turn_done = True
            else:
                y_severity = abs_y / 0.14
                theta_severity = abs(theta_error) / dyn_theta

                if y_severity > theta_severity and not y_in:
                    # Y 偏差更严重，侧移修正
                    if y_error > 0:
                        if abs_y > 0.20:
                            print(f"  -> Y严重度({y_severity:.1f})>{theta_severity:.1f}，偏右过多，左移大步")
                            BoxLMove2(1)
                        else:
                            print(f"  -> Y严重度({y_severity:.1f})>{theta_severity:.1f}，偏右，左移小步")
                            BoxLMove1(1)
                    else:
                        if abs_y > 0.20:
                            print(f"  -> Y严重度({y_severity:.1f})>{theta_severity:.1f}，偏左过多，右移大步")
                            BoxRMove2(1)
                        else:
                            print(f"  -> Y严重度({y_severity:.1f})>{theta_severity:.1f}，偏左，右移小步")
                            BoxRMove1(1)
                else:
                    # 角度偏差更严重，转体修正
                    if theta_error > 0:
                        if theta_error > dyn_theta + 5:
                            print(f"  -> 角度严重偏左({theta_error:.1f}°)")
                            BoxLturn30_2(1)
                        else:
                            print(f"  -> 角度偏左({theta_error:.1f}°)")
                            BoxLturn10_2(1)
                    else:
                        if theta_error < -dyn_theta - 3:
                            print(f"  -> 角度严重偏右({theta_error:.1f}°)")
                            BoxRturn30_2(1)
                        else:
                            print(f"  -> 角度偏右({theta_error:.1f}°)")
                            BoxRturn10_2(1)

        # --- ID == 2: 二号码对正 ---
        if ID == 2:
            print("2")
            if (theta_error  >  theta_threshold - 8 ):
                if (theta_error > theta_threshold + 2):
                    print("左转身30度", theta_error, " > ", 2 + theta_threshold)
                    BoxLturn30_2(1)
                else:
                    print("左转身10度", theta_error, " > ",  theta_threshold - 8)
                    BoxLturn10_2(1)

            elif (theta_error  < - (theta_threshold - 8)):
                if (theta_error < -theta_threshold):
                    print("右转身30度", theta_error, " < ", -theta_threshold)
                    BoxRturn30_2(1)
                else:
                    print("右转身10度", theta_error, " < ",  -(theta_threshold - 8))
                    BoxRturn10_2(1)

            elif (x_error > x_threshold + 0.06):
                if (x_error > x_threshold + 0.25):
                    print("向前靠近标签(远)", x_error, " > ", x_threshold + 0.25)
                    BoxGo1(1)
                else:
                    print("向前靠近标签", x_error, " > ", x_threshold + 0.05)
                    BoxGo1(1)


            elif (y_error < -y_threshold + 0.05):
                if (y_error < -y_threshold - 0.05):
                    print("右移大步", y_error, " < ", -y_threshold - 0.05)
                    BoxRMove2(1)
                else:
                    print("右移小步", y_error, " < ", -y_threshold + 0.05)
                    BoxRMove1(1)

            elif (theta_error  >  theta_threshold - 8 ):
                if (theta_error > theta_threshold + 2):
                    print("左转身30度", theta_error, " > ", 2 + theta_threshold)
                    BoxLturn30_2(1)
                else:
                    print("左转身10度", theta_error, " > ",  theta_threshold - 8)
                    BoxLturn10_2(1)

            elif (theta_error  < - (theta_threshold - 8) ):
                if (theta_error < -theta_threshold):
                    print("右转身30度", theta_error, " < ", -theta_threshold)
                    BoxRturn30_2(1)
                else:
                    print("右转身10度", theta_error, " < ",  -(theta_threshold - 8))
                    BoxRturn10_2(1)

            else:
                time.sleep(0.2)
                is_turn_done = True

        # --- ID == 3: 三号码对正 ---
        if ID == 3:
            print("3")
            if (y_error < y_threshold-0.02):
                if (y_error < -0.05):
                    print("右移大步", y_error, " < -0.05")
                    BoxRMove2(1)
                else:
                    print("右移小步", y_error, " < ", y_threshold )
                    BoxRMove1(1)

            elif (theta_error  > 25 + theta_threshold):
                print("左转身30度", theta_error, " > ", 25 + theta_threshold)
                BoxLturn30_2(1)

            elif (theta_error  < - theta_threshold - 10):
                print("右转身30度", theta_error, " < ", -10 - theta_threshold)
                BoxRturn30_2(1)
            else:
                is_turn_done = True

        # --- ID == 4: 四号码对正 ---
        if ID == 4:
            print("4")
            if (theta_error  >  theta_threshold ):
                if (theta_error > theta_threshold + 10):
                    print("左转身30度", theta_error, " > ", 15 + theta_threshold)
                    BoxLturn30_2(1)
                else:
                    print("左转身10度", theta_error, " > ",  theta_threshold)
                    BoxLturn10_2(1)

            elif (theta_error  < - theta_threshold ):
                if (theta_error < -theta_threshold - 5):
                    print("右转身30度", theta_error, " < ", -5 - theta_threshold)
                    BoxRturn30_2(1)
                else:
                    print("右转身10度", theta_error, " < ",  - theta_threshold)
                    BoxRturn10_2(1)


            elif (y_error > y_threshold - 0.05):
                if (y_error > y_threshold + 0.05):
                    print("左移大步", y_error, " > ", y_threshold + 0.05)
                    BoxLMove2(1)
                else:
                    print("左移小步", y_error, " > ", y_threshold - 0.05)
                    BoxLMove1(1)

            elif (x_error > 0.16):
                if x_error > 0.25:
                    print("向前靠近标签(远)", x_error, " > 0.25")
                    BoxGo2(1)
                elif x_error > 0.20:
                    print("向前靠近标签(中)", x_error, " > 0.18")
                    BoxGo1(1)
                else:
                    print("向前靠近标签(近)", x_error, " > 0.12")
                    BoxGo1(1)

            elif (theta_error  >  theta_threshold + 2):
                if (theta_error > theta_threshold + 15):
                    print("左转身30度", theta_error, " > ", 15 + theta_threshold)
                    BoxLturn30_2(1)
                else:
                    print("左转身10度", theta_error, " > ",  theta_threshold)
                    BoxLturn10_2(1)

            elif (theta_error  < - theta_threshold - 2):
                if (theta_error < -theta_threshold - 5):
                    print("右转身30度", theta_error, " < ", -5 - theta_threshold)
                    BoxRturn30_2(1)
                else:
                    print("右转身10度", theta_error, " < ",  -theta_threshold)
                    BoxRturn10_2(1)
            else:
                time.sleep(0.2)
                is_turn_done = True

        # --- ID == 5: 五号码对正 (动态角度准入) ---
        if ID == 5:
            print("5")

            # ====== 动态角度容差：越居中，角度越宽松 ======
            abs_y = abs(y_error)
            if abs_y < 0.03:
                dyn_theta = 25        # 基本居中，±25° 都能直走进来
            elif abs_y < 0.05:
                dyn_theta = 18        # 略偏，±18°
            elif abs_y < 0.09:
                dyn_theta = 12        # 中等偏移，±12°
            elif abs_y <= 0.12:
                dyn_theta = 8         # 边界偏移，±8°
            else:
                dyn_theta = 5         # 超界，必须先把角度对准

            y_in = abs_y <= 0.12            # Y 轴是否在 ±12cm 准入范围
            theta_in = abs(theta_error) <= dyn_theta
            x_in = x_error <= x_threshold   # 距离是否够近

            print(f"  [动态准入] |Y误差|={abs_y:.3f}m -> 角度容差±{dyn_theta}° | "
                  f"Y达标:{y_in} 角度达标:{theta_in}({theta_error:.1f}°) 距离达标:{x_in}")

            # --- Y 和角度都达标 → 检查是否可以安全前进 ---
            if y_in and theta_in:
                if not x_in:
                    # 角度余量检查：前进会扰动角度约3-4°，必须留足余量防止摇摆
                    theta_margin = abs(theta_error) - (dyn_theta - 5)
                    if theta_margin > 0:
                        print(f"  -> 准入通过但角度余量不足({theta_error:.1f}°接近边界{dyn_theta}°)，先微调角度防摇摆")
                        if theta_error > 0:
                            BoxLturn10_2(1)
                        else:
                            BoxRturn10_2(1)
                    elif x_error > 0.02:
                        if x_error > x_threshold + 0.1:
                            print(f"  -> 准入通过，距离较远({x_error:.3f}m)，前进2步")
                            BoxGo2(1)
                        else:
                            print(f"  -> 准入通过，距离稍远({x_error:.3f}m)，前进1步")
                            BoxGo1(1)
                    else:
                        print(f"  -> [完成] 距离已足够({x_error:.3f}m)，对正结束！")
                        time.sleep(0.2)
                        is_turn_done = True
                else:
                    print(f"  -> [完成] 三轴全部达标，对正结束！")
                    time.sleep(0.2)
                    is_turn_done = True

            # --- 不满足准入 → 比较 Y 和角度的严重程度，优先修更严重的一方 ---
            else:
                y_severity = abs_y / 0.12              # 归一化：1 = 在 Y 边界
                theta_severity = abs(theta_error) / dyn_theta  # 归一化：1 = 在角度边界

                if y_severity > theta_severity and not y_in:
                    # Y 轴偏差更严重，先侧移修正
                    if y_error > 0:
                        print(f"  -> Y严重度({y_severity:.1f}) > 角度严重度({theta_severity:.1f})，偏右，左移小步")
                        BoxLMove1(1)
                    else:
                        print(f"  -> Y严重度({y_severity:.1f}) > 角度严重度({theta_severity:.1f})，偏左，右移小步")
                        BoxRMove1(1)
                else:
                    # 角度偏差更严重（或 Y 已达标仅角度超标），先修角度
                    if theta_error > 0:
                        if theta_error > dyn_theta + 20:
                            print(f"  -> 角度严重度({theta_severity:.1f}) >= Y严重度({y_severity:.1f})，严重偏左({theta_error:.1f}°)，左转30度")
                            BoxLturn30_2(1)
                        else:
                            print(f"  -> 角度严重度({theta_severity:.1f}) >= Y严重度({y_severity:.1f})，轻微偏左({theta_error:.1f}°)，左转10度")
                            BoxLturn10_2(1)
                    else:
                        if theta_error < -dyn_theta - 5:
                            print(f"  -> 角度严重度({theta_severity:.1f}) >= Y严重度({y_severity:.1f})，严重偏右({theta_error:.1f}°)，右转30度")
                            BoxRturn30_2(1)
                        else:
                            print(f"  -> 角度严重度({theta_severity:.1f}) >= Y严重度({y_severity:.1f})，轻微偏右({theta_error:.1f}°)，右转10度")
                            BoxRturn10_2(1)

    return is_turn_done


# ==================== 主程序 ====================

if __name__ == '__main__':
    rospy.init_node('image_listener')
    Tag = TagConverter()
    time.sleep(0.5)
    round = 1
    ID = 0
    step = 3
    level = "start_box"
    time.sleep(5)

    while ChestOrg is None:
        print('wait')
        time.sleep(0.1)
    print('启动')

    while not rospy.is_shutdown():

        if ID == 0:
            if level == "start_box":
                if step == 2:
                    print("过道进入中转区，左转90找箱子")
                    BoxLturn90_2(1)
                    step = 1
                elif step == 4:
                    step = 3

                Box_Up(1)
                level = "end_box"
                time.sleep(0.3)

            elif level == "end_box":
                if step == 3:
                    time.sleep(0.7)
                    BoxLMove2(5)
                    BoxGo2(1)
                    print('起点开始，抱完箱子左移5步')
                    ID = 1
                    step = 1
                elif step == 4:
                    BoxLMove2(2)
                    print('大本营回来，刚抱起箱子左移去大本营')
                    ID = 1
                    step = 1
                elif step == 2:
                    BoxL_turn2(3)
                    print('大本营回来，刚抱起箱子左转去大本营')
                    ID = 1
                    step = 1

        else:  # ID > 0 阶段，开始找 Tag
            print(f"\n>>> [状态机] 当前阶段: 寻找并前往 Tag (当前目标 ID={ID}) <<<")
            marker = Tag.get_nearest_marker()

            if len(marker) == 0:
                print(f"[逻辑] 当前视野内 未检测到任何 Tag")

                if tag_was_seen and step == 1:
                    if last_align_action == "move":
                        tag_was_seen = False
                        if aligning_tag_id == 1:
                            print("[保护] 移动过程中tag消失，一号码判断为已对齐")
                            BoxGo4(1)
                            BoxGo3(1)
                            ID = 2
                        elif aligning_tag_id == 2:
                            print("[保护] 移动过程中tag消失，二号码判断为已对齐")
                            BoxRMove2(1)
                            ID = 3
                        elif aligning_tag_id == 3:
                            print("[保护] 移动过程中tag消失，三号码判断为已对齐")
                            BoxRMove1(1)
                            BoxGo4(2)
                            ID = 4
                        elif aligning_tag_id == 4:
                            print("[保护] 移动过程中tag消失，四号码判断为已对齐")
                            BoxLMove2(2)
                            BoxLMove1(1)
                            ID = 5
                        elif aligning_tag_id == 5:
                            print("[保护] 移动过程中tag消失，五号码判断为已对齐")
                            BoxGo4(2)
                            Box_Down(1)
                            ID = 6
                    elif last_align_action == "left_turn":
                        tag_was_seen = False
                        print("[保护] 左转导致tag丢失，右转30度回转找回")
                        BoxRturn30_2(1)
                    elif last_align_action == "right_turn":
                        tag_was_seen = False
                        print("[保护] 右转导致tag丢失，左转30度回转找回")
                        BoxLturn30_2(1)
                elif (ID == 0 and level == "end_box"):
                    print("  -> 应对策略: 刚搬起找一号码 - 左转")
                    BoxLturn30_2(1)
                elif (ID == 0 and level == "start_moving"):
                    print("  -> 应对策略: 已搬起找一号码 - 左移")
                    BoxLMove1(2)
                else:
                    # --- ID=3 盲搜超时：1次盲搜(右大步+两步右小步+左大转)后假定对正 ---
                    if ID == 3:
                        id3_blind_count += 1
                        print(f"  -> [ID=3盲搜] 第{id3_blind_count}次盲搜")
                        if id3_blind_count >= 1:
                            print("  -> 执行右大步+右小步+左大转，假定已对正，进入四号码")
                            BoxRMove2(2)
                            BoxRMove1(1)
                            BoxLturn30_2(1)
                            id3_blind_count = 0
                            tag_was_seen = False
                            id4_blind_count = 0
                            ID = 4
                        else:
                            search_for_id(ID)
                    # --- ID=4 盲搜增强：3次盲搜后还找不到就假定对正 ---
                    elif ID == 4:
                        id4_blind_count += 1
                        print(f"  -> [ID=4盲搜] 第{id4_blind_count}次盲搜")
                        if id4_blind_count >= 4:
                            print("  -> 两次盲搜未找到四号码，左大转假定已对正，执行后置任务")
                            BoxLturn30_2(1)
                            id4_blind_count = 0
                            tag_was_seen = False
                            BoxLMove2(2)
                            BoxRturn10_2(1)
                            BoxGo1(1)
                            ID = 5
                        else:
                            search_for_id(ID)
                    elif ID == 5:
                        id5_blind_count += 1
                        print(f"  -> [ID=5盲搜] 第{id5_blind_count}次检查")
                        if id5_blind_count == 1:
                            print("  -> 第一次盲搜：左移两小步")
                            BoxLMove1(2)
                        elif id5_blind_count == 2:
                            print("  -> 第二次盲搜：前进两步")
                            BoxGo2(1)
                        elif id5_blind_count == 3:
                            print("  -> 第三次盲搜：右移两小步")
                            BoxRMove1(2)
                        else:
                            print("  -> 三次盲搜后仍未找到五号码，假定已经对正")
                            id5_blind_count = 0
                            tag_was_seen = False
                            BoxGo4(2)
                            Box_Down(1)
                            time.sleep(10)
                            round += 1
                            ID = 0
                            step = 3
                            level = "start_box"
                            time.sleep(3)

                            while ChestOrg is None:
                                print('wait')
                                time.sleep(0.1)
                            print(f'第{round}轮启动')
                    else:
                        print(f"  -> 应对策略: 调用盲搜策略去寻找 ID {ID}")
                        search_for_id(ID)

            else:
                robot_tag_x = marker[1]
                robot_tag_y = marker[2]
                tag_yaw = marker[3] + 90
                print(f"[逻辑] 成功检测到 Tag！当前看到的 Tag ID 为: {marker[0]}")

                if step == 1:

                    if marker[0] == 1:
                        if ID == 1:
                            level = "start_moving"
                            print("[逻辑] 目标匹配！正在对正 1号 Tag...")
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw,
                                                 0.08, 0.0, 0, 0.03, 0.1, 15)
                            if result == True:
                                tag_was_seen = False
                                print("[状态切换] 一号码对正完毕，左大转后前进准备寻找二号码 (ID -> 2)")
                                BoxLturn30_2(1)
                                BoxGo4(1)
                                ID = 2
                        else:
                            print(f"[逻辑冲突] 看到 Tag 1，但当前目标是 ID={ID}，继续执行盲搜策略")
                            search_for_id(ID)

                    elif marker[0] == 2:
                        if ID == 2 or ID == 1:
                            ID = 2
                        if ID == 2 :
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw,
                                                 0.08, 0.0, 0, 0.01, 0.1, 15)
                            if result == True:
                                tag_was_seen = False
                                print("二号码对正完毕，右侧移对正三号码")
                                BoxRMove2(1)
                                BoxGo1(1)
                                ID = 3
                        else:
                            print("识别到2号tag但ID不是2，继续搜索目标")
                            search_for_id(ID)

                    elif marker[0] == 3:
                        if ID == 3:
                            id3_blind_count = 0
                            print("[逻辑] 目标匹配！正在对正 3号 Tag...")
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw,
                                                 0.12, 0.12, 0, 0.03, 0.1, 10)
                            if result == True:
                                tag_was_seen = False
                                print("[状态切换] 三号码对正完毕，右移前进准备寻找四号码 (ID -> 4)")
                                BoxGo3(2)
                                BoxLturn30_2(1)
                                BoxGo1(1)
                                ID = 4
                                id4_blind_count = 0
                        else:
                            print(f"[逻辑冲突] 看到 Tag 3，但当前目标是 ID={ID}，继续执行盲搜策略")
                            search_for_id(ID)

                    elif marker[0] == 4:
                        if ID == 4:
                            id4_blind_count = 0
                            print("[逻辑] 目标匹配！正在对正 4号 Tag...")
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw,
                                                 0.11, 0.1, 0, 0.05)
                            if result == True:
                                tag_was_seen = False
                                print("[状态切换] 四号码对正完毕，左移前进准备去放下海绵块 (ID -> 5)")
                                BoxLMove2(2)
                                BoxRturn10_2(1)
                                BoxGo1(1)
                                ID = 5
                        else:
                            print(f"[逻辑冲突] 看到 Tag 4，但当前目标是 ID={ID}，继续执行盲搜策略")
                            search_for_id(ID)

                    elif marker[0] == 5:
                        if ID == 5:
                            id5_blind_count = 0

                            print("[逻辑] 目标匹配！正在对正 5号 Tag...")
                            result = turn_to_tag(robot_tag_x, robot_tag_y, tag_yaw,
                                                 0.13, 0.02, 0, 0.03, 0.03, 8)
                            if result == True:
                                tag_was_seen = False
                                print("[终局执行] 五号码对正完毕！开始前进并放下海绵块！准备重新开始！")
                                BoxGo4(2)
                                Box_Down(1)
                                time.sleep(10)
                                round += 1
                                ID = 0
                                step = 3
                                level = "start_box"
                                time.sleep(3)

                                while ChestOrg is None:
                                    print('wait')
                                    time.sleep(0.1)
                                print(f'第{round}轮启动')
                        else:
                            print(f"[逻辑冲突] 看到 Tag 5，但当前目标是 ID={ID}，继续执行盲搜策略")
                            search_for_id(ID)

                elif ID == 6:
                    print("\n[异常] ID=6 不应出现，重置为0重新开始")
                    round += 1
                    ID = 0
                    step = 3
                    level = "start_box"
                    time.sleep(3)

            time.sleep(0)
