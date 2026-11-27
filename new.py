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
from leju import sensor_port

# ==================================================================
# 文件结构（便于手改）：
#   1) 动作定义（First*/Auto*/Box*）—— 常改动作名 / 步数，放最前
#   2) 配置常量 / 开关 / 全局状态 —— 阈值与 sleep 集中在后
#   3) 地磁与业务逻辑
# 动作函数体内的 SLEEP_* 在「调用时」解析，故常量可写在动作定义之后。
# ==================================================================

# ==================== 动作定义（常改区：动作名 / 步数）====================

def Box_Down(n):
    for i in range(0, n):
        print(f"[动作] 执行: 放下箱子 (第{i + 1}/{n}次)")
        base_action.action("boxdown")
        time.sleep(SLEEP_BOX_LIFT_S)


def Box_Up(n):
    """搬起箱子：抱箱一个动作组用 x_LiftCube3，抱箱二或四个动作组用 Lift_four_Cube。"""
    for i in range(0, n):
        if use_first_action_group():
            print(f"[动作] 执行: 搬起箱子(抱箱一个) x_LiftCube3 (第{i + 1}/{n}次)")
            base_action.action("x_LiftCube3")
        else:
            print(f"[动作] 执行: 搬起箱子(抱箱二或四个) Lift_four_Cube (第{i + 1}/{n}次)")
            base_action.action("Lift_four_Cube")
        time.sleep(SLEEP_BOX_LIFT_S)


# ==================== 抱箱一个动作组（原 First*） ====================

def FirstBoxGo1(n):
    for _ in range(n):
        print("[抱箱一个动作组] 前进1步")
        base_action.action("front1_quick1")
        time.sleep(SLEEP_FORWARD_S)


def FirstBoxGo2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 前进2步")
        base_action.action("front2_quick2")
        time.sleep(SLEEP_FORWARD_S)


def FirstBoxGo3(n):
    for _ in range(n):
        print("[抱箱一个动作组] 前进3步")
        base_action.action("front3ad")
        time.sleep(SLEEP_FORWARD_S)


def FirstBoxGo4(n):
    for _ in range(n):
        print("[抱箱一个动作组] 前进4步")
        base_action.action("front4_quick2")
        time.sleep(SLEEP_FORWARD_S)


def FirstBoxRMove1(n):
    for _ in range(n):
        print("[抱箱一个动作组] 右移小步")
        base_action.action("smallright")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxRMove2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 右移大步")
        base_action.action("bigright_10")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxLMove1(n):
    for _ in range(n):
        print("[抱箱一个动作组] 左移小步")
        base_action.action("smallleft")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxLMove2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 左移大步")
        base_action.action("bigleft_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxRturn30_2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 右转30度")
        base_action.action("rightturn30_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxLturn30_2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 左转30度")
        base_action.action("leftturn30_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxRturn10_2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 右转10度")
        base_action.action("rightturn10_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def FirstBoxLturn10_2(n):
    for _ in range(n):
        print("[抱箱一个动作组] 左转10度")
        base_action.action("leftturn10_1")
        time.sleep(SLEEP_SIDE_TURN_S)


# ==================== 抱箱二或四个动作组（原 Auto*） ====================

def AutoBoxGo1(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 前进1步")
        base_action.action("front1_quick1")
        time.sleep(SLEEP_FORWARD_S)


def AutoBoxGo2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 前进2步")
        base_action.action("front2_quick2")
        time.sleep(SLEEP_FORWARD_S)


def AutoBoxGo3(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 前进3步")
        base_action.action("front3ad")
        time.sleep(SLEEP_FORWARD_S)


def AutoBoxGo4(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 前进4步")
        base_action.action("front4_quick2")
        time.sleep(SLEEP_FORWARD_S)


def AutoBoxRMove1(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 右移小步")
        base_action.action("smallright")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxRMove2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 右移大步")
        base_action.action("bigright_10")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxLMove1(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 左移小步")
        base_action.action("smallleft")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxLMove2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 左移大步")
        base_action.action("bigleft_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxRturn30_2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 右转30度")
        base_action.action("rightturn30_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxLturn30_2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 左转30度")
        base_action.action("leftturn30_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxRturn10_2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 右转10度")
        base_action.action("rightturn10_1")
        time.sleep(SLEEP_SIDE_TURN_S)


def AutoBoxLturn10_2(n):
    for _ in range(n):
        print("[抱箱二或四个动作组] 左转10度")
        base_action.action("leftturn10_1")
        time.sleep(SLEEP_SIDE_TURN_S)


# ==================== 按每轮终端选择调用对应动作 ====================

def use_first_action_group():
    if selected_action_group == 1:
        return True
    if selected_action_group == 2:
        return False
    return selected_route == ROUTE_SEARCH


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


# ==================== 配置 / 开关 / 常量 ====================

# ==================================================================
# 【角度方案 2026-10-16｜融合：摄像头定方向 + 地磁辅助执行】
#
#   为什么改：2026-10-16 实测确认，地磁的「绝对角度」不可信 ——
#     · 零点随位置/动作漂移（复位处偏差约 25°）
#     · 灵敏度被放大 1.34 倍（地磁变化 27° 只对应真实 20°）
#   而摄像头 tag_yaw 与肉眼观察吻合（tag_yaw=30.8° ↔ 目视"右偏二三十度"）。
#   → 角度判定回到摄像头；地磁改做「等转稳」辅助（地磁的「增量」是可信的）。
#
#   现在的分工：
#     · 偏转角度 θ  -> 摄像头 tag_yaw（正对 tag 时 tag_yaw≈0）
#     · x/y 距离    -> 摄像头（地磁测不出距离）
#     · 地磁        -> 只判断"这一轮动作转完没有、机器人停稳没有"
#                      （治「动作服务异步 + sleep 太短 → 重复发动作 → 过冲」）
#
#   保留的地磁能力（USE_MAG_HEADING=True 时可整体启用）：
#     · 启动时把当前朝向记为 0 度（相对启动朝向）
#     · HEADING_TARGET[n] 指定各码目标角度
#     · 对齐期间「角度绝对优先」；强制动作期间加锁不介入；盲搜纳入航向校验
#
#   打开方式：
#     · 地磁辅助执行（当前）：MAG_ASSIST = True
#     · 角度也交给地磁（不推荐，实测不准）：USE_MAG_HEADING = True
#     · 全部退回最原始：MAG_ASSIST = False 且 USE_MAG_HEADING = False
#
#   看实时偏转角： python test1.py --calib
# ==================================================================

USE_MAG_HEADING = False      # 偏转角度是否【由地磁决定】
#   ★ 2026-10-16 实测结论：地磁的「绝对角度」不可信 ——
#       · 零点随位置/动作漂移（实测偏差 ~25°）
#       · 灵敏度被放大 1.34 倍（地磁变化 27° 只对应真实 20°）
#     而摄像头 tag_yaw 与肉眼观察吻合（30.8° ↔ 目视"右偏二三十度"）
#   → 所以角度判定回到摄像头；地磁改做「等转稳」辅助（见 MAG_ASSIST）
MAG_FALLBACK_CAMERA = False  # 读不到航向时是否退回摄像头角度（USE_MAG_HEADING=True 时才有意义）

# ============ 【地磁辅助执行】============
# 地磁只用来判断「机器人是否已经转稳」，不参与角度判定。
#
# 为什么需要：动作服务是【异步】的（action_receive 发完立刻 return），
#   原代码 sleep 0.1~0.3 秒就读下一帧 marker，此时动作可能还没做完 →
#   tag_yaw 还是旧值 → 程序以为"没转够" → 再发一次同样的转向动作 → 过冲。
#   等地磁稳定能根治这个（这正是"动作转不准"的成因之一）。
#
# ★ 已实测：地磁的「增量」是可信的（转 30° 它认 27°，比例稳定 1.34 倍）
MAG_ASSIST = True
MAG_ASSIST_TIMEOUT = 2.5     # 单次动作后等地磁稳定的最长等待（秒）
MAG_ASSIST_TOL = 1.2         # 稳定判据：连续两次采样 rel 变化 < 该值（度）
MAG_ASSIST_VERBOSE = True    # 打印每次等待结果

# ============ 【地磁纠角】转向丢码 → 用原地转角增量更新摄像头剩余 θ ============
# 场景：转向对正时把 tag 转出视野。
# 做法：见码时记下摄像头 last_seen_theta，并用【地磁】记下当时 rel 作为增量零点；
#       丢码后 剩余角 = last_seen_theta + 原地转过的 Δrel。
#       地磁只回答「原地转了多少度」，不判断需要朝向哪；目标仍是把剩余角打进该码固定死区。
#       进死区后认定角度已对正，再交给原有丢码逻辑（ID2/4 估距，ID1/3/5 保持 0.6s）。
# 前提：上一动作是原地转向。有位移时地磁零点会漂，Δrel 不当转角用。
MAG_RECOVER_ENABLE = True
MAG_RECOVER_MAX = 3          # 单次丢码内最多纠角几次（防止来回转不停）
ID2_MAG_RECOVER_DELAY_S = 0.15  # 短暂丢码不补转；按时间确认，避免把轮询次数当成帧数
ID2_MAG_RECOVER_MAX = 1         # 每次丢码最多补一次小转向，看到新观测后才重新允许
ID2_MAG_RECOVER_MARGIN_DEG = 2  # 剩余误差仅略超死区时不补转，留给视觉处理
ID2_MAG_RECOVER_MIN_SPIN_DEG = 2  # 没有测到实际转动时不根据旧角度重复发动作

# 【启动时自动写入】启动时刻的朝向，作为「初始方向」零点
HEADING_ZERO = None

# 【仅用于日志】current_relative_heading() 最近一次读到的「传感器原始航向」
LAST_RAW_HEADING = None

# 【地磁纠角】最后一次看到目标 tag 时的相对航向（只当原地转角增量的零点，不是目标朝向）
last_seen_rel = None
mag_recover_count = 0        # 本次丢码已纠角次数
id2_mag_missing_since = None

# 各号码【相对启动朝向】的目标角度（度）：0 = 与启动朝向一致
#   ★ 先按默认 0.0 跑一次，再按实测微调
HEADING_TARGET = {
    1: 0.0,
    2: 0.0,
    3: 0.0,
    4: 0.0,
    5: 0.0,
}

MAG_DIR_SIGN = 1.0           # 若实测"越转越偏/来回抖" → 改成 -1.0
MAG_SERVICE_TIMEOUT = 3.0

# 【强制动作锁】为 True 时，地磁角度环 + 对正逻辑完全不介入。
# 由 complete_current_tag() 在对齐完成后的「强制性动作序列」前后自动置位/复位，
# 保证"强制走三步"走到一半时不会被突然纠正角度打断。
forced_action_lock = False

# 5号：前后距离未到位时角度要求会更紧（原本是 dyn_theta - 5）。
# ★ 2026-10-16：dyn_theta 最小档已放宽到 8，这个下限同步抬到 8（摄像头 tag_yaw 噪声 ~±5°）。
ID5_MIN_TIGHT_ANGLE = 8.0

# 盲搜（没识别到 tag 时的盲走）时允许的航向偏差。
# 超过这个值就先转向摆正，再执行盲搜动作。
BLIND_SEARCH_ANGLE_TOL = 10.0


# ==================================================================
# 【调试】一键开关；False 时 dbg 静默（不影响既有 print）
# ==================================================================
DEBUG = True


def dbg(tag, msg, *args):
    """统一调试打印：带 [DEBUG:tag] 前缀，便于定位与一键关闭。"""
    if not DEBUG:
        return
    try:
        if args:
            # 支持 printf 风格或追加参数
            if isinstance(msg, str) and '%' in msg:
                text = msg % args
            else:
                text = ' '.join([str(msg)] + [str(a) for a in args])
        else:
            text = str(msg)
    except Exception as e:
        text = '%s | dbg_format_error=%s:%s' % (msg, type(e).__name__, e)
    print('[DEBUG:%s] %s' % (tag, text))


# ==================================================================
# 【CONFIG】散落阈值 / 时长集中定义（数值与原逻辑完全一致）
# ==================================================================

# ---- 动作后 sleep（秒）----
SLEEP_FORWARD_S = 0.1              # First/Auto BoxGo*
SLEEP_SIDE_TURN_S = 0.3            # 侧移 / 转向动作后
SLEEP_BOX_LIFT_S = 1.0             # 抱起 / 放下
SLEEP_ALIGN_PAUSE_S = 0.2          # 对正达标瞬间短暂停
SLEEP_LOST_HOLD_S = 0.05           # 丢码保持轮询
SLEEP_GOTO_BOX_AFTER_FORWARD_S = 0.5
SLEEP_DIRECT_ROUTE_BEFORE_SIDE_S = 0.7
SLEEP_FIND_BOX_WAIT_S = 0.3
SLEEP_MAG_POLL_S = 0.12            # mag_settle 采样间隔
MAG_ASSIST_MIN_WAIT_S = 0.6    # 新增：先固定等这么久再判稳定
SLEEP_CAMERA_INIT_S = 5.0
SLEEP_ROUND_RESET_S = 3.0
SLEEP_POST_INIT_S = 0.5
SLEEP_IMG_LOOP_OK_S = 0.05
SLEEP_IMG_LOOP_NONE_S = 0.3
SLEEP_IMG_FETCH_S = 0.3
SLEEP_FORCED_LOCK_POLL_S = 0.05
SLEEP_MAIN_LOOP_S = 0.0
SLEEP_CALIB_POLL_S = 0.5
SLEEP_WAIT_CHEST_S = 0.1
SLEEP_DIRECT_BOX_AFTER_UP_S = 0.3

# ---- 视觉取箱像素阈值 ----
GOTO_BOX_X_LEFT = 239
GOTO_BOX_X_RIGHT = 385
GOTO_BOX_Y_FAR = 290
FIND_BOX_BLUR_KSIZE = (3, 3)
FIND_BOX_ERODE_ITERS = 2
FIND_BOX_DILATE_KERNEL = (4, 4)
FIND_BOX_DILATE_ITERS = 2

# ---- Tag yaw 约定：marker[3]+90 才是对正用角度 ----
TAG_YAW_OFFSET_DEG = 90

# ---- ID1 对正（2026-10-31：原始 Y 采用非对称容忍范围；2026-11-26：向左移动 0.08m）----
ID1_DYN_THETA = 8                  # 角度通过容差：|θ|≤此值才算达标（固定±8°）
ID1_Y_MIN_M = -0.20                # 原始视觉 Y 下限（-0.12 左移 0.08m → -0.20）
ID1_Y_MAX_M = -0.10                # 原始视觉 Y 上限（-0.02 左移 0.08m → -0.10）
ID1_Y_BIG_MOVE_M = 0.20            # 横向大档门槛：|Y误差|>此值用 Move2，否则 Move1
ID1_LEFT_BIG_EXTRA_DEG = 5         # 左转大档：θ > dyn_theta + 此值 → Lturn30，否则 Lturn10
ID1_RIGHT_BIG_EXTRA_DEG = 3        # 右转大档：θ < -(dyn_theta + 此值) → Rturn30，否则 Rturn10
ID1_X_OFFSET = 0.08                # 前后目标偏置：x_error = dis_x - 此值
ID1_Y_OFFSET = -0.13               # 横向目标点：码1中心左侧 0.13m（-0.05 左移 0.08m → -0.13）
ID1_THETA_OFFSET = 0               # 角度目标偏置：theta_error = θ - 此值
ID1_X_THRESHOLD = 0.03             # 前后对正容差(米)，传入 turn_to_tag
ID1_Y_THRESHOLD = 0.03             # 兼容传参；ID1 实际使用上面的原始 Y 范围
ID1_THETA_THRESHOLD = 15           # 角度大档参考阈值(度)，传入 turn_to_tag

# ---- ID2 对正 ----
# 左右是否执行由 id2_full_align 决定：
#   False：一号码已对正完毕后再寻找二号码 → 只做角度 + 前后
#   True ：一号码未对正就丢码，且摄像头已识别到二号码 → 角度 + 左右 + 前后
ID2_THETA_DEADZONE = 5             # ★ 2026-10-16：±7 → ±5；角度死区：|θ|≤此值才进横向/前进
ID2_LEFT_BIG_EXTRA_DEG = 2         # 左转大档：θ > theta_threshold + 此值 → Lturn30，否则 Lturn10
ID2_Y_SMALL_BIAS = 0.05            # 横向小/大步分界附加量
ID2_Y_OFFSET = -0.05               # 横向目标点：码2中心左侧 0.05m（按当前代码的负Y方向约定）
ID2_THETA_OFFSET = 0               # 角度目标偏置：theta_error = θ - 此值
ID2_Y_THRESHOLD = 0.03             # 横向目标容差：围绕左侧 0.05m 目标点，误差≤3cm
ID2_THETA_THRESHOLD = 15           # 角度大档阈值(度)；右转 θ < -此值 → Rturn30

# ---- ID3 对正 ----
ID3_THETA_DEADZONE = 10            # ★ 2026-10-16：±6 → ±10；角度死区（放宽抗摄像头噪声）
ID3_THETA_BIG = 25                 # 角度大档绝对门槛：|θ|>此值 → turn30，否则 turn10
ID3_Y_GATE_BIAS = 0.02             # 横向门控偏置：y < y_threshold - 此值才修横向
ID3_Y_BIG_MOVE = -0.05             # 横向大档：y < 此值 → RMove2，否则 RMove1
ID3_X_OFFSET = 0.12                # 前后目标偏置：x_error = dis_x - 此值
ID3_Y_OFFSET = 0.20                # 横向目标偏置：y_error = dis_y - 此值（0.12 右移 0.08m → 0.20）
ID3_THETA_OFFSET = 0               # 角度目标偏置：theta_error = θ - 此值
ID3_X_THRESHOLD = 0.03             # 前后对正容差(米)
ID3_Y_THRESHOLD = 0.1              # 横向对正容差(米)，与 GATE_BIAS 组合
ID3_THETA_THRESHOLD = 10           # 角度对正容差(度)，传入 turn_to_tag

# ---- ID4 对正 / 丢码 ----
ID4_RIGHT_BIG_EXTRA = 8            # 两条路线统一用原搜寻门槛：θ < -(theta_threshold + 此值) → Rturn30
ID4_Y_GATE_BIAS = 0.05             # 横向门控/大小档偏置（与 y_threshold 组合）
ID4_X_GO2_LIMIT_M = 0.28           # 前进大档：x_error > 此值 → Go2，否则 Go1
ID4_Y_OFFSET = 0.1                 # 横向目标偏置：y_error = dis_y - 此值
ID4_THETA_OFFSET = 0               # 角度目标偏置：theta_error = θ - 此值
ID4_THETA_THRESHOLD = 5            # 角度死区(度)：与 turn_to_tag 默认 theta_threshold 一致
ID4_POSE_Y_LIMIT_M = 0.15          # 丢码完成判定：最后见到的 |Y| 须 ≤ 此值
ID4_POSE_THETA_LIMIT_DEG = 5       # 丢码完成判定：最后见到的 |θ| 须 ≤ 此值
ID4_FAR_X_M = 0.36                 # 丢码远距恢复：最后 X > 此值 → Go2 再等新观测
ID4_PRESEARCH_CONFIRM_FRAMES = 3   # ID=3→ID=4：连续三帧确认才跳过 ID=3
# ★ ID=4 地磁原地扫描（以开始转动前一刻航向为原点，先左30°再右30°，回零后前进2步）
ID4_SCAN_RANGE_DEG = 30.0          # 左右各扫范围（度）
ID4_RETURN_BIG_DEG = 18.0          # 回零点误差 > 此值用大转，否则用小转
ID4_RETURN_TOL_DEG = 6.0           # 回零点误差 < 此值视为回到零点
ID4_SCAN_MAX_CYCLES = 2            # 扫描+前进2步流程最多触发次数；超限直接执行 4→5
ID4_SCAN_PHASE_MAX_TURNS = 8       # 单阶段最多转向次数安全兜底（防地磁不动死循环）

# ---- ID5 对正 ----
ID5_DYN_THETA = 10                 # 角度通过容差：固定 ±10°（不再按 |y| 分级）
ID5_Y_IN_M = 0.12                  # 横向达标：|Y|≤此值才进入前后距离判断
ID5_FORWARD_LIMIT = 0.30             # ★ 2026-10-30：0.2 → 0.30；前后距离 ≤ 此值(m) 即对正；未到则每次 BoxGo1
ID5_LEFT_BIG_EXTRA_DEG = 20        # 左转大档：θ > dyn_theta + 此值 → Lturn30，否则 Lturn10
ID5_RIGHT_BIG_EXTRA_DEG = 5        # 右转大档：θ < -(dyn_theta + 此值) → Rturn30，否则 Rturn10
ID5_TIGHT_SUB_DEG = 5              # 精调角：tight = max(dyn_theta - 此值, ID5_MIN_TIGHT_ANGLE)
ID5_X_MICRO_M = 0.02               # 前后微距：x_error ≤ 此值视为到位可完成
ID5_X_GO2_EXTRA_M = 0.1            # 前进大档：x > x_threshold + 此值 → Go2，否则 Go1
ID5_X_OFFSET = 0.13                # 前后目标偏置：x_error = dis_x - 此值
ID5_Y_OFFSET = 0.02                # 横向目标偏置：y_error = dis_y - 此值
ID5_THETA_OFFSET = 0               # 角度目标偏置：theta_error = θ - 此值
ID5_X_THRESHOLD = 0.03             # 前后对正容差(米)；x_in = x_error ≤ 此值
ID5_Y_THRESHOLD = 0.03             # 横向对正容差(米)，传入 turn_to_tag（ID5 实际用 Y_IN）
ID5_THETA_THRESHOLD = 8            # 角度对正容差(度)，传入 turn_to_tag（ID5 实际用 DYN）

# ---- 地磁纠角 / 盲搜大档额外角度 ----
MAG_RECOVER_BIG_EXTRA_DEG = 20     # 地磁纠角大档：|剩余角| > 死区 + 此值 → turn30，否则 turn10
BLIND_SEARCH_BIG_EXTRA_DEG = 20    # 盲搜摆正大档：|err| > TOL + 此值 → turn30，否则 turn10


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
# 取箱路线（启动时由终端选择，不再由 round 决定）
ROUTE_SEARCH = 1     # 视觉搜寻取箱（原 firstauto3.9）
ROUTE_DIRECT = 2     # 直接抱起取箱（原 auto3.5）
selected_route = None

# 【计时】每轮「从启动（终端选择完）到放下物块」的用时
round_start_time = None      # 本轮计时起点（time.monotonic）；None = 本轮未开始
round_records = []           # 历史记录：[(轮次, 路线名, 动作组名, 用时秒), ...]

# 终端输入 1 / 2 / 3 对应的「路线 × 动作组」三种状态机
#   动作组 1 = 抱箱一个动作组（抱箱动作 x_LiftCube3）
#   动作组 2 = 抱箱二或四个动作组（抱箱动作 Lift_four_Cube）
ROUTE_GROUP_PRESETS = {
    1: (ROUTE_SEARCH, 1),   # 视觉搜寻取箱 + 抱箱一个动作组
    2: (ROUTE_DIRECT, 2),   # 直接抱起取箱 + 抱箱二或四个动作组
    3: (ROUTE_DIRECT, 1),   # 直接抱起取箱 + 抱箱一个动作组
}
is_start_moved = False

# 盲搜计数
id3_blind_count = 0
id4_blind_count = 0
id5_blind_count = 0

# Tag 识别与丢码状态
tag_was_seen = False
aligning_tag_id = 0
# 二号码对正模式。False=一号码对正完毕后再找二号，跳过左右；
# True=一号码未对正丢码时摄像头已看到二号，保留左右对正。
id2_full_align = False
last_seen_time = None
last_seen_dis_x = None
last_seen_dis_y = None
last_seen_theta = None
lost_since = None
tag4_action_pending = False
# ID=2 丢码恢复：基准是最后一次看到的前后距离（对正看的就是这个距离，不是 x_error）
tag2_lost_baseline_dis_x = None
tag2_lost_forward_steps = 0
# ID=4 丢码恢复：只使用丢码前最后一次有效观测建立基准；重新看到 ID=4 后重置
tag4_lost_baseline_x_error = None
tag4_lost_forward_steps = 0

# ID=1→ID=4 的动态预搜索状态
id4_presearch_active = False
id4_presearch_confirmed = False
id4_presearch_consecutive = 0
id4_presearch_scan_step = 0
id4_presearch_heading_restored = False
id4_presearch_forward_steps = 0
id4_presearch_visual_rounds = 0       # 已完成的完整视觉扫描轮数
id4_presearch_advance_done = False
id4_presearch_recovering = False  # 已见过 ID=4 后重捕获，不允许重复走固定8步
id4_presearch_recovery_reverse_done = False  # 每次恢复只先反向重捕获一次
id4_presearch_heading_attempts = 0
id4_recovery_side_steps = 0       # 近距离重捕获只先修一次横向，随后交替探测，避免单向累积
id4_scan_origin_rel = None        # 本次扫描流程开始转动前一刻的地磁航向原点
id4_scan_phase = "left"           # "left"(中心→左30°) / "right"(→右30°) / "return"(回零点)
id4_scan_cycles = 0               # 已完成的「扫描+前进2步」流程次数
id4_scan_phase_turns = 0          # 当前阶段已发转向次数（安全兜底）

# Tag 对正与丢码参数
TAG_LOST_COMPLETE_SECONDS = 0.6
TAG2_X_OFFSET = 0.08
TAG2_X_THRESHOLD = 0.01
TAG2_FORWARD_LIMIT = 0.145         # ★ 2026-11-25：0.145 <-0.155
TAG2_GO2_EXTRA_M = 0.15    # 距离差超过此值 → 走大步
TAG2_LOST_FORWARD_STEP_M = 0.025    # 丢码估算：每前进一步从最后距离扣 0.025m；对正界限仍是上面的 0.155m
TAG4_X_OFFSET = 0.11
TAG4_X_THRESHOLD = 0.05
TAG4_FORWARD_ERROR = 0.16          # ★ 2026-10-16：改回 0.16（曾短暂试过 0.14，已还原）
TAG4_LOST_FORWARD_STEP_M = 0.025   # ID=4 丢码后估算：每完成前进一步，x_error 减少 0.025m
TAG4_OBSERVATION_WAIT_SECONDS = 0.8
ACTION_SERVICE_WAIT_SECONDS = 30

color_range = {
    "green": [(48, 102, 72), (99, 255, 155)],
    "orange": [(0, 107, 122), (19, 255, 255)],
}

# ==================== 地磁与辅助函数 ====================

def mag_service_ready(timeout=MAG_SERVICE_TIMEOUT):
    """检查地磁服务 /get_magnet 是否可用"""
    try:
        dbg('mag_service_ready', 'wait_for_service get_magnet timeout=%s', timeout)
        rospy.wait_for_service("get_magnet", timeout=timeout)
        dbg('mag_service_ready', 'ready=True')
        return True
    except Exception as e:
        dbg('mag_service_ready', 'ready=False err=%s:%s', type(e).__name__, e)
        return False


def read_mag_heading():
    """读取地磁航向角（0~359 度）。失败返回 None。"""
    try:
        h = float(sensor_port.get_magnet())
        dbg('read_mag_heading', 'raw=%.3f', h)
        return h
    except Exception as e:
        print(f"[地磁] 读取失败: {e}")
        dbg('read_mag_heading', 'fail %s:%s', type(e).__name__, e)
        return None


def angle_diff(current, target):
    """环形最短偏差，范围 (-180, 180]。

    地磁航向是环绕的（359° 与 1° 只差 2°，不是 358°），所以不能直接相减，
    否则在正北附近会算出 ±358 的巨量误差把机器人转飞。
    """
    return (current - target + 180.0) % 360.0 - 180.0


def reset_heading_zero():
    """【启动时重置】把当前朝向记为「初始方向」(0 度)。

    好处：完全不用校准磁北，换场地也不用重新标定，
    只要机器人每次从同一朝向出发即可。
    """
    global HEADING_ZERO
    h = read_mag_heading()
    if h is None:
        HEADING_ZERO = None
        print("[地磁] 重置失败：读不到航向")
        return False
    HEADING_ZERO = h
    print(f"[地磁] 已重置初始方向：启动航向 {h:.1f}° 记为 0°")
    return True


def current_relative_heading():
    """返回「相对启动朝向」的偏转角（度，-180~180）；未就绪返回 None。

    正数 = 相对启动朝向顺时针偏了（偏右）
    负数 = 相对启动朝向逆时针偏了（偏左）
    """
    global LAST_RAW_HEADING
    if HEADING_ZERO is None:
        return None
    h = read_mag_heading()
    if h is None:
        return None
    LAST_RAW_HEADING = h
    return angle_diff(h, HEADING_ZERO)


# ============ 动作记录（纯日志，不改变任何行为）============
# 包装 base_action.action，记录「本周期实际下发了哪个动作名」。
# 用途：把地磁的 Δrel 与具体动作对应起来 ——
#   · 转向动作（名字带 turn）后 Δrel = 真实转动量（原地转，位置不变 → 零点不漂）
#   · 移动动作后 Δrel 混入了位移导致的零点漂移，仅供参考
LAST_ACTION_NAME = None
LAST_ACTION_TIME = 0.0


def _install_action_recorder():
    """把 base_action.action 包一层，记录最后下发的动作名（只记录，不改行为）"""
    try:
        orig = base_action.action
    except Exception:
        return False
    if getattr(orig, "_recorder_installed", False):
        return True

    def _wrapped(name, *args, **kwargs):
        global LAST_ACTION_NAME, LAST_ACTION_TIME
        LAST_ACTION_NAME = name
        LAST_ACTION_TIME = time.time()
        return orig(name, *args, **kwargs)

    _wrapped._recorder_installed = True
    base_action.action = _wrapped
    return True


def last_action_is_turn():
    """最近一次下发的动作是否为「转向」。
    返回 True / False；还没记录到任何动作时返回 None。"""
    if not LAST_ACTION_NAME:
        return None
    return "turn" in LAST_ACTION_NAME.lower()


def mag_settle(rel_before=None):
    """【地磁辅助】动作发出后，等地磁航向稳定了再让主循环进入下一轮判定。

    为什么需要：
        动作服务是【异步】的（action_receive 发完立刻返回），原代码 sleep 0.1~0.3 秒
        就读下一帧 marker，此时动作可能还没做完 -> 读到的 tag_yaw 还是旧值 ->
        程序以为"没转够" -> 再发一次同样的转向动作 -> 实际转过量（过冲）。
        地磁的「增量」是可信的，用它判断"机器人是否已经停稳"最可靠。

    ★ 关键前提（2026-10-16 用户实测确认）：
        场地内不同位置的地磁干扰不同 -> 机器人只要有明显【位移】，零点就会漂。
        所以 Δrel 只有【原地转向】时才是"真实转动量"；
        位移动作后的 Δrel 混入了零点漂移，只能参考。下面会按动作类型自动标注。

    返回 (rel_after, delta)：
        rel_after  稳定后的相对航向（度）；地磁不可用时为 None
        delta      相对 rel_before 的变化量（度）；任一为 None 时为 None
    地磁未启用 / 零点未就绪 -> 立即返回 (None, None)，行为与改动前完全一致。
    """
    if not MAG_ASSIST or HEADING_ZERO is None:
        return None, None

    t0 = time.time()
    prev = None
    n = 0

    # ★ 新增：先无条件等够最小时间，避免动作起步阶段被误判为"已稳定"
    while (time.time() - t0) < MAG_ASSIST_MIN_WAIT_S and not rospy.is_shutdown():
        time.sleep(SLEEP_MAG_POLL_S)

    # 之后才开始判稳定（采样间隔仍是 SLEEP_MAG_POLL_S）
    while (time.time() - t0) < MAG_ASSIST_TIMEOUT and not rospy.is_shutdown():
        r = current_relative_heading()
        if r is None:
            break
        n += 1
        if prev is not None and abs(angle_diff(r, prev)) < MAG_ASSIST_TOL:
            break
        prev = r
        time.sleep(SLEEP_MAG_POLL_S)

    r_after = current_relative_heading()
    dt = time.time() - t0
    delta = None
    if rel_before is not None and r_after is not None:
        delta = angle_diff(r_after, rel_before)

    if MAG_ASSIST_VERBOSE:
        act = LAST_ACTION_NAME if LAST_ACTION_NAME else "未知动作"
        is_turn = last_action_is_turn()
        if is_turn is True:
            kind = "真实转动量"
        elif is_turn is False:
            kind = "含位移漂移·仅供参考"
        else:
            kind = "无法判定类型"
        if delta is None:
            print("[地磁辅助] 动作=%s  等转稳 %.2fs（%d 次采样，rel=%s）"
                  % (act, dt, n, "--" if r_after is None else "%.1f°" % r_after))
        else:
            print("[地磁辅助] 动作=%s  Δrel=%+.1f°（%s）  稳定耗时 %.2fs（%d 次采样）"
                  % (act, delta, kind, dt, n))
    return r_after, delta


def tag_theta_deadzone(tag_id):
    """该码对正用的固定过角死区（度）。丢码后剩余角也用同一套。"""
    if tag_id == 1:
        return float(ID1_DYN_THETA)
    if tag_id == 2:
        return float(ID2_THETA_DEADZONE)
    if tag_id == 3:
        return float(ID3_THETA_DEADZONE)
    if tag_id == 4:
        return float(ID4_THETA_THRESHOLD)
    if tag_id == 5:
        return float(ID5_DYN_THETA)
    return float(ID1_DYN_THETA)


def remaining_theta_from_spin(last_theta, last_rel, current_rel):
    """丢码前摄像头 θ 加上原地地磁转角 → 当前剩余角。

    地磁只提供增量，不提供目标朝向。
    θ 正 = 还需左转；rel 正 = 偏右。原地右转会使剩余角变大。
    """
    spin = MAG_DIR_SIGN * angle_diff(current_rel, last_rel)
    return last_theta + spin


def mag_recover_turn(now=None):
    """丢码后：用地磁增量更新丢码前的摄像头 θ，把剩余角打进该码固定死区。

    地磁只测「原地转了多少度」，不判断需要朝向哪。
    需要转多少仍由 last_seen_theta（摄像头最后误差）决定：
        剩余角 = last_seen_theta + Δrel

    返回 True  = 本周期已经转向（调用方不要再做别的丢码处理）
    返回 False = 剩余角已在死区 / 地磁不可用 / 上一动作不是转向 / 已达纠角上限
                 → 交回原有丢码逻辑
    """
    global mag_recover_count, last_seen_theta, last_seen_rel
    global id2_mag_missing_since

    # ID=4 丢码统一走视觉重捕获，避免盲转三次后陷入永久等待。
    # ID=1/3/5 沿用原有逻辑；仅收紧 ID=2 的触发条件和补转次数。
    if ID == 4:
        return False
    if not MAG_RECOVER_ENABLE or last_seen_rel is None or last_seen_theta is None:
        return False
    if ID == 2:
        if now is None:
            now = time.monotonic()
        if id2_mag_missing_since is None:
            id2_mag_missing_since = now
        if now - id2_mag_missing_since < ID2_MAG_RECOVER_DELAY_S:
            return False
        if mag_recover_count >= ID2_MAG_RECOVER_MAX or last_action_is_turn() is not True:
            return False
    if mag_recover_count >= MAG_RECOVER_MAX:
        return False
    # 位移后地磁增量混有零点漂移，不能当转角
    if last_action_is_turn() is False:
        return False

    cur = current_relative_heading()
    if cur is None:
        return False

    remaining = remaining_theta_from_spin(last_seen_theta, last_seen_rel, cur)
    deadzone = tag_theta_deadzone(ID)
    spin = MAG_DIR_SIGN * angle_diff(cur, last_seen_rel)

    if abs(remaining) <= deadzone:
        print(
            "[地磁纠角] 丢码前θ=%+.1f°  原地转了 %+.1f°  剩余角=%+.1f° "
            "已在 ID=%s 死区 ±%.0f° 内，认定角度已对正"
            % (last_seen_theta, spin, remaining, ID, deadzone)
        )
        # 把估算剩余角写回；rel 改到当前，避免下一周期把旧增量再加一次。
        last_seen_theta = remaining
        last_seen_rel = cur
        return False

    if ID == 2:
        if abs(remaining) <= deadzone + ID2_MAG_RECOVER_MARGIN_DEG:
            return False
        if abs(spin) < ID2_MAG_RECOVER_MIN_SPIN_DEG:
            return False

    mag_recover_count += 1
    print(
        "[地磁纠角] 丢码前θ=%+.1f°  原地转了 %+.1f°  剩余角=%+.1f°（死区 ±%.0f°）"
        " → 继续纠角（第 %d/%d 次）"
        % (last_seen_theta, spin, remaining, deadzone,
           mag_recover_count, MAG_RECOVER_MAX)
    )

    # 剩余角 > 0：还需左转；< 0：还需右转。不追地磁绝对朝向。
    if ID == 2:
        # 没有新视觉观测时只补一个小转向，不再连续盲转。
        if remaining > 0:
            BoxLturn10_2(1)
        else:
            BoxRturn10_2(1)
    elif remaining > 0:
        if remaining > deadzone + MAG_RECOVER_BIG_EXTRA_DEG:
            BoxLturn30_2(1)
        else:
            BoxLturn10_2(1)
    else:
        if remaining < -(deadzone + MAG_RECOVER_BIG_EXTRA_DEG):
            BoxRturn30_2(1)
        else:
            BoxRturn10_2(1)

    mag_settle()
    return True


def blind_heading_guard():
    """盲搜前的地磁介入：航向偏差超过 BLIND_SEARCH_ANGLE_TOL 就先转向摆正。

    返回 True  = 本周期已经转向，调用方不要再执行盲搜动作
    返回 False = 航向已够正（或地磁不可用/强制动作中），可以正常盲搜
    """
    if forced_action_lock:
        return False
    if not (USE_MAG_HEADING and HEADING_ZERO is not None):
        return False

    rel = current_relative_heading()
    if rel is None:
        return False

    err = MAG_DIR_SIGN * angle_diff(rel, HEADING_TARGET.get(ID, 0.0))
    if abs(err) <= BLIND_SEARCH_ANGLE_TOL:
        return False

    print(f"[盲搜] 地磁航向偏差 {err:+.1f}°，超过 ±{BLIND_SEARCH_ANGLE_TOL:.0f}° → 先转向再盲搜")
    if err > 0:
        if err > BLIND_SEARCH_ANGLE_TOL + BLIND_SEARCH_BIG_EXTRA_DEG:
            BoxLturn30_2(1)
        else:
            BoxLturn10_2(1)
    else:
        if err < -BLIND_SEARCH_ANGLE_TOL - BLIND_SEARCH_BIG_EXTRA_DEG:
            BoxRturn30_2(1)
        else:
            BoxRturn10_2(1)
    return True


def resolve_theta_error(tag_id, tag_yaw):
    """返回本周期对正用的【角度误差】(度，正 = 需左转)。

    地磁优先。HEADING_ZERO 未就绪或读不到航向时，按 MAG_FALLBACK_CAMERA 决定：
    退回摄像头 tag_yaw，还是返回 None（调用方跳过本周期，避免用错角度乱转）。
    """
    if not USE_MAG_HEADING:
        return tag_yaw
    rel = current_relative_heading()
    if rel is not None:
        target = HEADING_TARGET.get(tag_id, 0.0)
        return MAG_DIR_SIGN * angle_diff(rel, target)
    if MAG_FALLBACK_CAMERA:
        print("[地磁] 航向不可用 → 本周期退回摄像头角度")
        return tag_yaw
    return None


# ==================== 每轮终端确认 ====================

def wait_for_round_start(input_func=input, output=print):
    """每轮开始时由终端选 1 / 2 / 3（三种路线 × 动作组状态机）。

    路线不再由 round 决定 —— 第 1 轮也可以直接走"直接抱起"路线。
    """
    global round_started, selected_action_group, selected_route
    global round_start_time        # ★ 计时起点

    output(f"\n========== 第{round}轮 ==========")
    output("[选项] 1 = 视觉搜寻取箱 + 抱箱一个动作组")
    output("[选项] 2 = 直接抱起取箱 + 抱箱二或四个动作组")
    output("[选项] 3 = 直接抱起取箱 + 抱箱一个动作组")

    while True:
        choice = input_func("请输入 1 / 2 / 3 开始本轮：").strip()

        if choice not in ("1", "2", "3"):
            output("[输入无效] 只能输入 1 / 2 / 3，机器人尚未开始动作")
            continue

        selected_route, selected_action_group = ROUTE_GROUP_PRESETS[int(choice)]
        round_started = True
        round_start_time = time.monotonic()      # ★ 计时起点：本轮启动

        route_name = ("视觉搜寻取箱(firstauto3.9)"
                      if selected_route == ROUTE_SEARCH else "直接抱起取箱(auto3.5)")
        group_name = ("抱箱一个动作组"
                      if selected_action_group == 1 else "抱箱二或四个动作组")
        output(f"[轮次启动] 第{round}轮 → 路线：{route_name}；动作组：{group_name}")
        return selected_action_group


# ==================== 第一轮视觉取箱 ====================

def find_box(img, color_name):
    global chest_circle_x, chest_circle_y

    if Chest_img is None:
        print("[视觉] 等待获取图像中...")
        time.sleep(SLEEP_FIND_BOX_WAIT_S)
    else:
        box_img = img
        box_img_bgr = cv2.cvtColor(box_img, cv2.COLOR_RGB2BGR)
        box_img_hsv = cv2.cvtColor(box_img, cv2.COLOR_BGR2HSV)
        box_img = cv2.GaussianBlur(box_img_hsv, FIND_BOX_BLUR_KSIZE, 0)
        box_img_mask = cv2.inRange(
            box_img,
            color_range[color_name][0],
            color_range[color_name][1],
        )
        cv2.erode(box_img_mask, None, iterations=FIND_BOX_ERODE_ITERS)
        box_img_opened = cv2.dilate(
            box_img_mask,
            np.ones(FIND_BOX_DILATE_KERNEL, np.uint8),
            iterations=FIND_BOX_DILATE_ITERS,
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
        time.sleep(SLEEP_FIND_BOX_WAIT_S)
    else:
        print(
            f"[微调对准] 评估色块坐标 X={chest_circle_x:.1f}px "
            "(目标区间 295~345)"
        )
        if chest_circle_x < GOTO_BOX_X_LEFT:
            print("  -> 色块偏左，执行左侧移小步")
            BoxLMove1(1)
        elif chest_circle_x > GOTO_BOX_X_RIGHT:
            print("  -> 色块偏右，执行右侧移小步")
            BoxRMove1(1)
        elif chest_circle_y < GOTO_BOX_Y_FAR:
            print(f"  -> 色块距离较远，前进1步，Y={chest_circle_y}")
            BoxGo1(1)
            time.sleep(SLEEP_GOTO_BOX_AFTER_FORWARD_S)
        else:
            print("[微调对准] 色块位置满足抱箱条件")
            Box_Up(1)
            level = "end_box"


# ==================== 取箱区路线 ====================

def process_start_box(input_func=input, output=print):
    global step, level, is_start_moved

    if not round_started:
        wait_for_round_start(input_func=input_func, output=output)

    if selected_route == ROUTE_SEARCH:
        if not is_start_moved:
            print("[视觉搜寻路线] 执行开局固定补偿")
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
    time.sleep(SLEEP_DIRECT_BOX_AFTER_UP_S)


def leave_pickup_area():
    global ID, step

    dbg('leave_pickup_area', 'route=%s', selected_route)
    # ★ 统一删去侧移后的强制前进，左移完毕后直接切到 ID=1 开始搜寻一号码
    if selected_route == ROUTE_SEARCH:
        BoxLMove2(2)
    else:
        # ★ 2026-10-22：直接抱起路线左侧大步 5 → 4
        time.sleep(SLEEP_DIRECT_ROUTE_BEFORE_SIDE_S)
        BoxLMove2(4)

    ID = 1
    step = 1


# ==================== 搜索号码 ====================

def search_for_id():
    # ★ 盲搜前地磁介入：航向偏超 ±BLIND_SEARCH_ANGLE_TOL 就先转向，本周期不盲搜
    dbg('search_for_id', 'enter ID=%s forced_lock=%s', ID, forced_action_lock)
    if blind_heading_guard():
        dbg('search_for_id', 'blind_heading_guard diverted')
        return
    print(f"[盲搜] 当前目标 ID={ID}，未看见 Tag，启动原盲搜")
    if ID == 1:
        # 丢码/未见到 1 号时原盲搜：前进三步；侧移离区后的强制前走已在 leave_pickup_area 删掉，此处勿再删
        BoxGo3(1)
    elif ID == 2:
        # ID=1 对正内的3步 + 完成后的4步已经完成首段距离；
        # 切到 ID=2 后统一用2步逐次寻找，避免再叠加一次4步。
        print("[ID=2盲搜] 前进2步")
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
    global last_seen_rel, mag_recover_count, id2_mag_missing_since
    global tag4_lost_baseline_x_error, tag4_lost_forward_steps
    global tag2_lost_baseline_dis_x, tag2_lost_forward_steps
    global id2_full_align
    global id4_presearch_active, id4_presearch_confirmed
    global id4_presearch_consecutive, id4_presearch_scan_step
    global id4_presearch_heading_restored, id4_presearch_forward_steps
    global id4_presearch_visual_rounds
    global id4_presearch_advance_done
    global id4_presearch_recovering, id4_presearch_recovery_reverse_done
    global id4_presearch_heading_attempts, id4_recovery_side_steps
    global id4_scan_origin_rel, id4_scan_phase
    global id4_scan_cycles, id4_scan_phase_turns

    tag_was_seen = False
    aligning_tag_id = 0
    id2_full_align = False
    last_seen_time = None
    last_seen_dis_x = None
    last_seen_dis_y = None
    last_seen_theta = None
    lost_since = None
    tag4_action_pending = False
    tag4_lost_baseline_x_error = None
    tag4_lost_forward_steps = 0
    tag2_lost_baseline_dis_x = None
    tag2_lost_forward_steps = 0
    last_seen_rel = None
    mag_recover_count = 0
    id2_mag_missing_since = None
    id4_presearch_active = False
    id4_presearch_confirmed = False
    id4_presearch_consecutive = 0
    id4_presearch_scan_step = 0
    id4_presearch_heading_restored = False
    id4_presearch_forward_steps = 0
    id4_presearch_visual_rounds = 0
    id4_presearch_advance_done = False
    id4_presearch_recovering = False
    id4_presearch_recovery_reverse_done = False
    id4_presearch_heading_attempts = 0
    id4_recovery_side_steps = 0
    id4_scan_origin_rel = None
    id4_scan_phase = "left"
    id4_scan_cycles = 0
    id4_scan_phase_turns = 0


def start_id4_presearch(advance_done=False, recovering=False):
    """进入 ID=4 预搜索：地磁原地左右30°扫描，回零后前进2步。"""
    global id4_presearch_active, id4_presearch_confirmed
    global id4_presearch_consecutive, id4_presearch_scan_step
    global id4_presearch_heading_restored, id4_presearch_forward_steps
    global id4_presearch_visual_rounds
    global id4_presearch_advance_done
    global id4_presearch_recovering, id4_presearch_recovery_reverse_done
    global id4_presearch_heading_attempts, id4_recovery_side_steps
    global id4_scan_origin_rel, id4_scan_phase
    global id4_scan_cycles, id4_scan_phase_turns

    id4_presearch_active = True
    # 已经三次确认过 ID=4，转向后重捕获无需重新等待三次。
    id4_presearch_confirmed = recovering
    id4_presearch_consecutive = 0
    id4_presearch_scan_step = 0
    id4_presearch_heading_restored = False
    id4_presearch_forward_steps = 0
    id4_presearch_visual_rounds = 0
    id4_presearch_advance_done = advance_done
    id4_presearch_recovering = recovering
    id4_presearch_recovery_reverse_done = False
    id4_presearch_heading_attempts = 0
    id4_recovery_side_steps = 0
    id4_scan_origin_rel = None
    id4_scan_phase = "left"
    id4_scan_cycles = 0
    id4_scan_phase_turns = 0
    print("[ID=4预搜索] 开始：地磁左右30°原地扫描，回零后前进2步")


def id4_presearch_scan_actions():
    """返回一轮有界的视觉扫描动作。

    先向左扩大视野，再向右回扫到原方向；左右总量相等，重复扫描不会
    把机器人逐轮带离路线。转向丢码时，先反向转 10 度尝试把目标找回。
    """
    scan_actions = (
        ("左转30度", BoxLturn30_2),
        ("左转10度", BoxLturn10_2),
        ("右转10度", BoxRturn10_2),
        ("右转10度", BoxRturn10_2),
        ("右转10度", BoxRturn10_2),
        ("右转10度", BoxRturn10_2),
        ("右转10度", BoxRturn10_2),
        ("左转10度", BoxLturn10_2),
    )

    if not id4_presearch_recovering or id4_presearch_recovery_reverse_done:
        return scan_actions

    action_name = (LAST_ACTION_NAME or "").lower()
    if "leftturn" in action_name:
        reverse_action = ("右转10度（反向重捕获）", BoxRturn10_2)
    elif "rightturn" in action_name:
        reverse_action = ("左转10度（反向重捕获）", BoxLturn10_2)
    elif last_seen_theta is not None and last_seen_theta > 0:
        # 测试环境或动作记录不可用时，用最后一帧视觉角度作保守退路。
        reverse_action = ("右转10度（按最后视觉角度重捕获）", BoxRturn10_2)
    elif last_seen_theta is not None and last_seen_theta < 0:
        reverse_action = ("左转10度（按最后视觉角度重捕获）", BoxLturn10_2)
    else:
        reverse_action = None

    if reverse_action is None:
        return scan_actions
    return (reverse_action,) + scan_actions


def process_id4_presearch_missing():
    """ID=3→ID=4 未识别到码时的地磁原地扫描流程（单步执行，保持视觉识别随时可打断）：

    单次流程：
      1) 以开始转动前一刻的相对航向为原点；
      2) 中心点 → 左侧 30°（全用左大转，即使已达 29° 仍多触发一次左大转再停下）；
      3) 左侧 30° → 右侧 30°（全用右大转，即使已达 29° 仍多触发一次右大转再停下）；
      4) 回归原点：误差 > 18° 用大转，否则用小转，误差 < 6° 视为回到零点；
      5) 回到零点后前进 2 步（BoxGo2(1)）。
    最多触发 ID4_SCAN_MAX_CYCLES(2) 次流程；两次后仍未找到 Tag 4 则直接视为已对齐，执行 4→5 动作。
    """
    global id4_presearch_consecutive
    global id4_scan_origin_rel, id4_scan_phase
    global id4_scan_cycles, id4_scan_phase_turns
    global tag4_lost_forward_steps, tag4_action_pending

    if not id4_presearch_active:
        search_for_id()
        return False

    if not id4_presearch_confirmed:
        id4_presearch_consecutive = 0

    if id4_scan_cycles >= ID4_SCAN_MAX_CYCLES:
        print(
            f"[ID=4地磁扫描] 已触发 {id4_scan_cycles}/{ID4_SCAN_MAX_CYCLES} 次流程"
            "仍未找到 Tag 4 → 直接视为已对齐，执行 4→5 动作"
        )
        return complete_current_tag(4)

    cur_rel = current_relative_heading()
    if cur_rel is None:
        id4_scan_cycles += 1
        print(
            f"[ID=4地磁扫描] 地磁航向不可用 → 跳过本轮扫描并前进2步"
            f"（第 {id4_scan_cycles}/{ID4_SCAN_MAX_CYCLES} 次流程）"
        )
        BoxGo2(1)
        if id4_presearch_recovering and tag4_lost_baseline_x_error is not None:
            tag4_lost_forward_steps += 2
            tag4_action_pending = True
        id4_scan_origin_rel = None
        id4_scan_phase = "left"
        id4_scan_phase_turns = 0
        return False

    if id4_scan_origin_rel is None:
        id4_scan_origin_rel = cur_rel
        id4_scan_phase = "left"
        id4_scan_phase_turns = 0
        print(
            f"[ID=4地磁扫描] 启动第 {id4_scan_cycles + 1}/{ID4_SCAN_MAX_CYCLES} 次流程，"
            f"以当前航向 {id4_scan_origin_rel:+.1f}° 为原点（左右各扫 {ID4_SCAN_RANGE_DEG:.0f}°）"
        )

    # rel_offset > 0 表示相对原点偏右，< 0 表示相对原点偏左
    rel_offset = MAG_DIR_SIGN * angle_diff(cur_rel, id4_scan_origin_rel)

    if id4_scan_phase == "left":
        left_deg = -rel_offset
        if left_deg < ID4_SCAN_RANGE_DEG and id4_scan_phase_turns < ID4_SCAN_PHASE_MAX_TURNS:
            id4_scan_phase_turns += 1
            print(
                f"[ID=4地磁扫描] 左扫阶段：当前偏左 {left_deg:.1f}°（< {ID4_SCAN_RANGE_DEG:.0f}°）"
                f"→ 执行左大转（第{id4_scan_phase_turns}次）"
            )
            BoxLturn30_2(1)
            if MAG_ASSIST:
                mag_settle(cur_rel)
            return False
        print(f"[ID=4地磁扫描] 左侧扫到位（相对原点 {rel_offset:+.1f}°），切向右扫 {ID4_SCAN_RANGE_DEG:.0f}°")
        id4_scan_phase = "right"
        id4_scan_phase_turns = 0

    if id4_scan_phase == "right":
        if rel_offset < ID4_SCAN_RANGE_DEG and id4_scan_phase_turns < ID4_SCAN_PHASE_MAX_TURNS:
            id4_scan_phase_turns += 1
            print(
                f"[ID=4地磁扫描] 右扫阶段：当前偏右 {rel_offset:.1f}°（< {ID4_SCAN_RANGE_DEG:.0f}°）"
                f"→ 执行右大转（第{id4_scan_phase_turns}次）"
            )
            BoxRturn30_2(1)
            if MAG_ASSIST:
                mag_settle(cur_rel)
            return False
        print(f"[ID=4地磁扫描] 右侧扫到位（相对原点 {rel_offset:+.1f}°），开始回归零点")
        id4_scan_phase = "return"
        id4_scan_phase_turns = 0

    # id4_scan_phase == "return"
    if abs(rel_offset) < ID4_RETURN_TOL_DEG or id4_scan_phase_turns >= ID4_SCAN_PHASE_MAX_TURNS:
        id4_scan_cycles += 1
        print(
            f"[ID=4地磁扫描] 已回到零点（误差 {rel_offset:+.1f}°，< {ID4_RETURN_TOL_DEG:.0f}°）"
            f"→ 触发前进2步（完成第 {id4_scan_cycles}/{ID4_SCAN_MAX_CYCLES} 次流程）"
        )
        BoxGo2(1)
        if id4_presearch_recovering and tag4_lost_baseline_x_error is not None:
            tag4_lost_forward_steps += 2
            tag4_action_pending = True
        if MAG_ASSIST:
            mag_settle(cur_rel)
        id4_scan_origin_rel = None
        id4_scan_phase = "left"
        id4_scan_phase_turns = 0
        return False

    id4_scan_phase_turns += 1
    if rel_offset > 0:
        if rel_offset > ID4_RETURN_BIG_DEG:
            print(f"[ID=4地磁扫描] 回零点：偏右 {rel_offset:+.1f}°（> {ID4_RETURN_BIG_DEG:.0f}°）→ 左大转")
            BoxLturn30_2(1)
        else:
            print(f"[ID=4地磁扫描] 回零点：偏右 {rel_offset:+.1f}°（≤ {ID4_RETURN_BIG_DEG:.0f}°）→ 左小转")
            BoxLturn10_2(1)
    else:
        if rel_offset < -ID4_RETURN_BIG_DEG:
            print(f"[ID=4地磁扫描] 回零点：偏左 {rel_offset:+.1f}°（< -{ID4_RETURN_BIG_DEG:.0f}°）→ 右大转")
            BoxRturn30_2(1)
        else:
            print(f"[ID=4地磁扫描] 回零点：偏左 {rel_offset:+.1f}°（≥ -{ID4_RETURN_BIG_DEG:.0f}°）→ 右小转")
            BoxRturn10_2(1)
    if MAG_ASSIST:
        mag_settle(cur_rel)
    return False


def advance_to_id4_once():
    """预搜索确认 ID=4 后的唯一一次前进4步×2。"""
    global id4_presearch_advance_done
    global tag4_lost_forward_steps, tag4_action_pending

    print("[ID=4预搜索] 角度已对正，执行前进4步×2")
    BoxGo4(2)
    if tag4_lost_baseline_x_error is not None:
        tag4_lost_forward_steps += 8
        tag4_action_pending = True
    id4_presearch_advance_done = True


def process_id4_presearch_marker(current_marker, now=None):
    """预搜索阶段处理 ID=4：连续三帧确认后只做角度预对正，再前进。"""
    global ID, id4_presearch_active, id4_presearch_confirmed
    global id4_presearch_consecutive, id4_presearch_scan_step
    global id4_presearch_advance_done

    marker_id = current_marker[0]
    if marker_id != 4:
        return False

    robot_tag_x = current_marker[1]
    robot_tag_y = current_marker[2]
    tag_yaw = current_marker[3] + TAG_YAW_OFFSET_DEG

    if not id4_presearch_active:
        start_id4_presearch()

    if not id4_presearch_confirmed:
        id4_presearch_consecutive += 1
        print(
            f"[ID=4预搜索] 识别到 ID=4，连续确认 "
            f"{id4_presearch_consecutive}/{ID4_PRESEARCH_CONFIRM_FRAMES} 帧"
        )
        if id4_presearch_consecutive < ID4_PRESEARCH_CONFIRM_FRAMES:
            return False

        ID = 4
        id4_presearch_confirmed = True
        id4_presearch_scan_step = 0
        print("[ID=4预搜索] 连续三帧确认 ID=4，开始视觉角度对正")

    theta_err = resolve_theta_error(4, tag_yaw)
    if theta_err is None:
        print("[ID=4预搜索] 无法获得角度，保持当前状态等待下一帧")
        return False

    # 从确认开始就记录有效观测，保证 BoxGo4(2) 后短暂丢码时可走 ID=4 丢码保护。
    mark_target_seen(
        4,
        dis_x=robot_tag_x,
        dis_y=robot_tag_y,
        theta=theta_err,
        now=now,
    )

    if theta_err > ID4_THETA_THRESHOLD:
        rel_before = current_relative_heading() if MAG_ASSIST else None
        if theta_err > ID4_THETA_THRESHOLD + 10:
            BoxLturn30_2(1)
        else:
            BoxLturn10_2(1)
        if MAG_ASSIST:
            mag_settle(rel_before)
        print(f"[ID=4预搜索] 角度误差={theta_err:+.1f}°，左转修正")
        return False

    if theta_err < -ID4_THETA_THRESHOLD:
        rel_before = current_relative_heading() if MAG_ASSIST else None
        if theta_err < -ID4_THETA_THRESHOLD - ID4_RIGHT_BIG_EXTRA:
            BoxRturn30_2(1)
        else:
            BoxRturn10_2(1)
        if MAG_ASSIST:
            mag_settle(rel_before)
        print(f"[ID=4预搜索] 角度误差={theta_err:+.1f}°，右转修正")
        return False

    if not id4_presearch_advance_done:
        advance_to_id4_once()
    else:
        print("[ID=4预搜索] 已完成前置前进4步×2，进入 ID=4 正常对正")
    id4_presearch_active = False
    id4_presearch_confirmed = False
    id4_presearch_consecutive = 0
    return False


def complete_current_tag(tag_id):
    """编号完成 → 执行强制性后置动作。

    ★ 期间加「强制动作锁」：对正逻辑与地磁角度环完全不介入，
      避免"强制走三步"走到一半时被突然纠正角度打断。
      锁用 try/finally 保证无论中途 return / 抛异常都会解锁。
    """
    global forced_action_lock

    forced_action_lock = True
    try:
        return _run_complete_actions(tag_id)
    finally:
        forced_action_lock = False


def _run_complete_actions(tag_id):
    global ID, id4_blind_count

    dbg('_run_complete_actions', 'tag_id=%s route=%s group=%s', tag_id, selected_route, selected_action_group)
    clear_tag_tracking()

    if tag_id == 1:
        print("[号码完成] ID=1 对正完成，前进4步*2后切到 ID=2")
        BoxGo4(2)
        ID = 2
        return False

    if tag_id == 2:
        print("[号码完成] ID=2 对正完成，执行后置动作")
        BoxRMove2(1)
        ID = 3
        return False

    if tag_id == 3:
        print("[号码完成] ID=3 对正完成，前进4步×2后进入 ID=4 预搜索")
        BoxGo4(2)
        ID = 4
        id4_blind_count = 0
        start_id4_presearch(advance_done=True)
        return False

    if tag_id == 4:
        print("[号码完成] ID=4 对正完成，左移大步×2后切到 ID=5")
        BoxLMove2(2)
        ID = 5
        return False

    if tag_id == 5:
        print("[号码完成] ID=5 对正完成（含前后≤0.30m），前进4步×3后放下")
        BoxGo4(3)
        Box_Down(1)
        print_round_elapsed()      # ★ 计时终点：已放下物块
        return True

    raise ValueError(f"不支持的 Tag ID: {tag_id}")


def print_round_elapsed():
    """【计时】打印本轮「从启动到放下物块」的用时，并记入历史。

    起点：wait_for_round_start() 里用户选完 1/2/3/4 的那一刻
    终点：5 号完成后的 Box_Down(1)（放下物块）
    返回用时（秒）；没有起点时返回 None。
    """
    global round_start_time

    if round_start_time is None:
        print("[计时] 本轮没有起始时间（未经过终端选择？），跳过")
        return None

    secs = time.monotonic() - round_start_time
    round_start_time = None                      # 清掉，避免重复计
    m = int(secs // 60)
    s = secs - m * 60
    route_name = "视觉搜寻取箱" if selected_route == ROUTE_SEARCH else "直接抱起取箱"
    group_name = "抱箱一个动作组" if selected_action_group == 1 else "抱箱二或四个动作组"
    print("=" * 62)
    print("[计时] 第%d轮完成：从启动到放下物块 = %.2f 秒（%d 分 %.1f 秒）"
          % (round, secs, m, s))
    print("[计时]   路线：%s ｜ 动作组：%s" % (route_name, group_name))
    print("=" * 62)
    round_records.append((round, route_name, group_name, secs))
    return secs


def reset_round_state(sleep_func=time.sleep):
    global round, ID, step, level, round_started
    global selected_action_group, selected_route
    global id3_blind_count, id4_blind_count, id5_blind_count
    global round_start_time

    round += 1
    ID = 0
    step = 3
    level = "start_box"
    round_started = False
    selected_action_group = None
    selected_route = None
    id3_blind_count = 0
    id4_blind_count = 0
    id5_blind_count = 0
    clear_tag_tracking()
    round_start_time = None          # 本轮计时已结束 / 下一轮重新计时

    # 累计用时汇总（每轮结束时显示一次，方便对比不同路线 / 动作组）
    if round_records:
        print("[计时] 累计 %d 轮：" % len(round_records))
        for r_no, r_route, r_group, r_secs in round_records:
            print("[计时]   第%d轮  %7.2f 秒  （%s / %s）"
                  % (r_no, r_secs, r_route, r_group))
        print("[计时]   最快一轮：%.2f 秒" % min(x[3] for x in round_records))

    sleep_func(SLEEP_ROUND_RESET_S)
    print(
        f"[轮次重置] 等待下一次输入路线与动作组，"
        f"第{round}轮路线由你选择"
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
    global tag4_lost_forward_steps, tag2_lost_forward_steps

    is_turn_done = False
    dbg(
        'turn_to_tag',
        'enter ID=%s step=%s dis_x=%s dis_y=%s theta=%s '
        'x_off=%s y_off=%s th_off=%s x_th=%s y_th=%s th_th=%s',
        ID, step, dis_x, dis_y, theta,
        x_offset, y_offset, theta_offset, x_threshold, y_threshold, theta_threshold,
    )

    if forced_action_lock:
        print("[强制动作] 执行中，地磁角度环不介入")
        dbg('turn_to_tag', 'skip: forced_action_lock')
        return False

    if theta is None:
        print("[地磁] 航向不可用，本周期跳过对正（不做任何动作）")
        dbg('turn_to_tag', 'skip: theta is None')
        return False

    # 【地磁辅助】记下"动作前"的航向，函数出口用它校验「本周期到底转了多少度」
    rel_before = current_relative_heading() if MAG_ASSIST else None

    x_error = dis_x - x_offset
    y_error = dis_y - y_offset
    # theta 由 resolve_theta_error() 给出：地磁角度误差优先、摄像头仅兜底
    theta_error = theta - theta_offset

    print(f"\n--- [Tag对准] 目标 ID={ID} ---")
    print(
        f"[Tag对准] 原始: X={dis_x:.3f}m，Y={dis_y:.3f}m，角度误差={theta:.1f}°"
    )
    print(
        f"[Tag对准] 误差: X={x_error:.3f}m | Y={y_error:.3f}m | 角度={theta_error:.1f}°"
    )
    print("--------------------------------------------------")

    # ★ 航向双打印：同时给出「传感器原始输出航向」与「零点纠正后航向」
    #   原始输出航向   = 磁力计直接给出的绝对航向（0~359 度）
    #   零点纠正后航向 = 相对「启动朝向」的偏转角（-180~180 度，正 = 偏右）
    rel_h = current_relative_heading()   # 顺带把原始航向记进 LAST_RAW_HEADING
    raw_h = LAST_RAW_HEADING
    if raw_h is None:
        raw_h = read_mag_heading()
    raw_txt = "不可用" if raw_h is None else f"{raw_h:.1f}"
    rel_txt = "不可用" if rel_h is None else f"{rel_h:+.1f}"
    zero_txt = "未设置" if HEADING_ZERO is None else f"{HEADING_ZERO:.1f}"
    print(
        f"[地磁航向] 原始输出航向={raw_txt}° | "
        f"零点纠正后航向={rel_txt}° (启动零点={zero_txt}°)"
    )

    if step != 1:
        return False

    if ID == 1:
        abs_y = abs(y_error)
        # 2026-10-21: ID1 通过角固定 ±ID1_DYN_THETA（含最近档，不再放宽）
        dyn_theta = ID1_DYN_THETA

        y_in = ID1_Y_MIN_M <= dis_y <= ID1_Y_MAX_M
        theta_in = abs(theta_error) <= dyn_theta
        print(
            f"[ID=1对准] 原始Y={dis_y:.3f}m，"
            f"允许范围=[{ID1_Y_MIN_M:.2f}, {ID1_Y_MAX_M:.2f}]m，"
            f"角度容差=±{dyn_theta}°，"
            f"Y达标={y_in}，角度达标={theta_in}"
        )

        # ★ 2026-10-16：改成与 ID2/3/4 一致的顺序判断（角度 → 横向 → 完成）
        if theta_error > dyn_theta:
            if theta_error > dyn_theta + ID1_LEFT_BIG_EXTRA_DEG:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -dyn_theta:
            if theta_error < -dyn_theta - ID1_RIGHT_BIG_EXTRA_DEG:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif not y_in:
            if y_error > 0:
                if abs_y > ID1_Y_BIG_MOVE_M:
                    BoxLMove2(1)
                else:
                    BoxLMove1(1)
            else:
                if abs_y > ID1_Y_BIG_MOVE_M:
                    BoxRMove2(1)
                else:
                    BoxRMove1(1)
        else:
            time.sleep(SLEEP_ALIGN_PAUSE_S)
            # 保留原有流程：ID=1 视觉对正达标后先前进3步；
            # complete_current_tag(1) 随后再执行固定4步并切换到 ID=2。
            BoxGo3(1)
            is_turn_done = True

    elif ID == 2:
        # 角度始终先修。左右仅在「一号码未对正就丢码、且已看到二号码」时执行；
        # 一号码对正完毕后再寻找二号码时，角度达标后直接做前后。
        if id2_full_align:
            print("[ID=2对准] 一号码未对正丢码后已看到二号码，执行角度+左右+前后")
        else:
            print("[ID=2对准] 一号码已对正完毕后再寻找，只执行角度+前后，跳过左右")

        if theta_error > ID2_THETA_DEADZONE:
            if theta_error > theta_threshold + ID2_LEFT_BIG_EXTRA_DEG:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -ID2_THETA_DEADZONE:
            if theta_error < -theta_threshold:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        # 暂且屏蔽二号码左右对齐，只做角度与前后对齐
        # elif id2_full_align and y_error > y_threshold:
        #     # 正向横向误差：按 ID1 现有约定向左修正
        #     if y_error > y_threshold + ID2_Y_SMALL_BIAS:
        #         BoxLMove2(1)
        #     else:
        #         BoxLMove1(1)
        # elif id2_full_align and y_error < -y_threshold:
        #     # 负向横向误差：向右修正
        #     if y_error < -(y_threshold + ID2_Y_SMALL_BIAS):
        #         BoxRMove2(1)
        #     else:
        #         BoxRMove1(1)

        elif dis_x > TAG2_FORWARD_LIMIT:
            # 远距离用大步，近距离用一小步
            if dis_x > TAG2_FORWARD_LIMIT + 0.15:     # 差超过 0.15m → 走大步
                BoxGo2(1)
                step_add = 2
            else:
                BoxGo1(1)
                step_add = 1
            if tag2_lost_baseline_dis_x is not None:
                tag2_lost_forward_steps += step_add
        else:
            time.sleep(SLEEP_ALIGN_PAUSE_S)
            is_turn_done = True

    elif ID == 3:
        # ★ 角度绝对优先（原来是"先修横向"）
        # ★ 2026-10-16 放宽死区：±6 → ±ID3_THETA_DEADZONE（摄像头 tag_yaw 噪声 ~±5°）
        if theta_error > ID3_THETA_DEADZONE:
            if theta_error > ID3_THETA_BIG:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -ID3_THETA_DEADZONE:
            if theta_error < -ID3_THETA_BIG:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif y_error < y_threshold - ID3_Y_GATE_BIAS:
            if y_error < ID3_Y_BIG_MOVE:
                BoxRMove2(1)
            else:
                BoxRMove1(1)
        else:
            is_turn_done = True

    elif ID == 4:
        if theta_error > theta_threshold:
            if theta_error > theta_threshold + 10:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -theta_threshold:
            if theta_error < -theta_threshold - ID4_RIGHT_BIG_EXTRA:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif y_error > y_threshold - ID4_Y_GATE_BIAS:
            if y_error > y_threshold + ID4_Y_GATE_BIAS:
                BoxLMove2(1)
            else:
                BoxLMove1(1)
        elif x_error > TAG4_FORWARD_ERROR:
            if x_error > ID4_X_GO2_LIMIT_M:
                BoxGo2(1)
                # 此动作基于当前有效观测发出；若动作后立即丢码，需计入估算位移。
                if tag4_lost_baseline_x_error is not None:
                    tag4_lost_forward_steps += 2
            else:
                BoxGo1(1)
                if tag4_lost_baseline_x_error is not None:
                    tag4_lost_forward_steps += 1
        else:
            time.sleep(SLEEP_ALIGN_PAUSE_S)
            is_turn_done = True

    elif ID == 5:
        abs_y = abs(y_error)
        # ★ 2026-10-16：角度通过范围改为「固定 ±ID5_DYN_THETA」，不再按 |y| 分级
        dyn_theta = ID5_DYN_THETA

        y_in = abs_y <= ID5_Y_IN_M
        theta_in = abs(theta_error) <= dyn_theta
        x_in = dis_x <= ID5_FORWARD_LIMIT
        print(
            f"[ID=5对准] |Y|={abs_y:.3f}m，"
            f"角度容差=±{dyn_theta}°，"
            f"前后限={ID5_FORWARD_LIMIT}m，"
            f"Y到位={y_in}，角度到位={theta_in}，"
            f"前后到位={x_in}（X={dis_x:.3f}m）"
        )

        # ★ 2026-10-22：角度 → 左右 → 前后；前后距离 ≤ ID5_FORWARD_LIMIT 即对正，
        #   未到则每次前进一步（BoxGo1）；完成后续仍由 complete 里 BoxGo4(2)+放下
        if theta_error > dyn_theta:
            if theta_error > dyn_theta + ID5_LEFT_BIG_EXTRA_DEG:
                BoxLturn30_2(1)
            else:
                BoxLturn10_2(1)
        elif theta_error < -dyn_theta:
            if theta_error < -dyn_theta - ID5_RIGHT_BIG_EXTRA_DEG:
                BoxRturn30_2(1)
            else:
                BoxRturn10_2(1)
        elif not y_in:
            if y_error > 0:
                BoxLMove1(1)
            else:
                BoxRMove1(1)
        elif not x_in:
            BoxGo1(1)
        else:
            time.sleep(SLEEP_ALIGN_PAUSE_S)
            is_turn_done = True


    # 【地磁辅助】本周期发了动作（未判定完成）→ 等机器人真的停稳再进下一轮，
    # 避免"动作还在进行中就被重新判定"造成的重复发动作 / 过冲。
    if MAG_ASSIST and not forced_action_lock and not is_turn_done:
        mag_settle(rel_before)

    dbg('turn_to_tag', 'exit ID=%s is_turn_done=%s', ID, is_turn_done)
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
    global last_seen_rel, mag_recover_count, id2_mag_missing_since
    global tag4_lost_baseline_x_error, tag4_lost_forward_steps
    global tag2_lost_baseline_dis_x, tag2_lost_forward_steps

    if now is None:
        now = time.monotonic()

    tag_was_seen = True
    aligning_tag_id = tag_id
    last_seen_time = now
    last_seen_dis_x = dis_x
    last_seen_dis_y = dis_y
    last_seen_theta = theta
    lost_since = None
    if tag_id == 2:
        # 二号码对正直接比较前后距离，基准记原始距离；重新看到后清零步数。
        tag2_lost_baseline_dis_x = dis_x
        tag2_lost_forward_steps = 0
    if tag_id == 4:
        # 每次新观测都建立新基准并清零；随后 turn_to_tag 发出的前进动作会计入步数。
        tag4_lost_baseline_x_error = (
            None if dis_x is None else dis_x - TAG4_X_OFFSET
        )
        tag4_lost_forward_steps = 0
    # ★ 记录「看到 tag 时」的地磁 rel，丢码后只用来算原地转了多少度（增量零点，不是目标朝向）
    last_seen_rel = current_relative_heading()
    mag_recover_count = 0
    id2_mag_missing_since = None


def process_marker(current_marker, now=None):
    global marker, ID, level
    global id3_blind_count, id4_blind_count, id5_blind_count
    global tag4_action_pending
    global id2_full_align
    global id4_presearch_consecutive
    global id4_presearch_active, id4_presearch_confirmed
    global id4_scan_origin_rel, id4_scan_phase
    global id4_scan_cycles, id4_scan_phase_turns

    if step != 1:
        dbg('process_marker', 'skip: step=%s != 1', step)
        return False

    marker = current_marker
    marker_id = marker[0]
    robot_tag_x = marker[1]
    robot_tag_y = marker[2]
    tag_yaw = marker[3] + TAG_YAW_OFFSET_DEG
    dbg(
        'process_marker',
        'ID=%s marker_id=%s x=%.4f y=%.4f yaw=%.2f',
        ID, marker_id, robot_tag_x, robot_tag_y, tag_yaw,
    )

    print(
        f"[Tag] 当前目标 ID={ID}，识别到 ID={marker_id}，"
        f"X={robot_tag_x:.3f}m，Y={robot_tag_y:.3f}m，角度={tag_yaw:.1f}°"
    )

    if ID == 3 and id4_presearch_active and marker_id != 4:
        id4_presearch_consecutive = 0

    if ID == 4 and marker_id != 4:
        # 看见别的码也表示当前目标丢失，统一经过同一套恢复逻辑。
        return process_missing_marker(now=now)

    if ID == 2 and tag_was_seen and aligning_tag_id == 2 and marker_id != 2:
        return process_missing_marker(now=now)

    if marker_id == 1:
        if ID != 1:
            search_for_id()
            return False

        level = "start_moving"
        theta_err = resolve_theta_error(1, tag_yaw)
        mark_target_seen(
            1,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=theta_err,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            theta_err,
            ID1_X_OFFSET,
            ID1_Y_OFFSET,
            ID1_THETA_OFFSET,
            ID1_X_THRESHOLD,
            ID1_Y_THRESHOLD,
            ID1_THETA_THRESHOLD,
        )
        if done:
            return complete_current_tag(1)
        return False

    if marker_id == 2:
        # 仍在对一号码时就已经看到二号码：一号码没对正完（含丢码），
        # 二号码走完整对正。一号码对正完毕后 ID 已是 2，保持跳过左右。
        if ID == 1:
            id2_full_align = True
            print(
                "[ID=2对正] 一号码尚未对正完毕，摄像头已识别到二号码，"
                "后续按完整对正（含左右）"
            )
        if ID == 1 or ID == 2:
            ID = 2
        if ID != 2:
            search_for_id()
            return False

        theta_err = resolve_theta_error(2, tag_yaw)
        mark_target_seen(
            2,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=theta_err,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            theta_err,
            TAG2_X_OFFSET,
            ID2_Y_OFFSET,
            ID2_THETA_OFFSET,
            TAG2_X_THRESHOLD,
            ID2_Y_THRESHOLD,
            ID2_THETA_THRESHOLD,
        )
        if done:
            return complete_current_tag(2)
        return False

    if marker_id == 3:
        if ID != 3:
            search_for_id()
            return False

        id3_blind_count = 0
        theta_err = resolve_theta_error(3, tag_yaw)
        mark_target_seen(
            3,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=theta_err,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            theta_err,
            ID3_X_OFFSET,
            ID3_Y_OFFSET,
            ID3_THETA_OFFSET,
            ID3_X_THRESHOLD,
            ID3_Y_THRESHOLD,
            ID3_THETA_THRESHOLD,
        )
        if done:
            return complete_current_tag(3)
        return False

    if marker_id == 4:
        if ID == 3:
            # ID=3 尚未完成但已经提前看到 ID=4：进入三帧确认，确认后跳过 ID=3。
            if not id4_presearch_active:
                start_id4_presearch()
            return process_id4_presearch_marker(current_marker, now=now)
        if ID != 4:
            search_for_id()
            return False

        if id4_presearch_active:
            if id4_presearch_advance_done:
                print("[ID=4地磁扫描] 识别到 Tag 4 → 立即切入正常对齐逻辑")
                id4_presearch_active = False
                id4_presearch_confirmed = False
                id4_presearch_consecutive = 0
                id4_scan_origin_rel = None
                id4_scan_phase = "left"
                id4_scan_cycles = 0
                id4_scan_phase_turns = 0
            else:
                return process_id4_presearch_marker(current_marker, now=now)

        id4_blind_count = 0
        tag4_action_pending = False
        theta_err = resolve_theta_error(4, tag_yaw)
        mark_target_seen(
            4,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=theta_err,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            theta_err,
            TAG4_X_OFFSET,
            ID4_Y_OFFSET,
            ID4_THETA_OFFSET,
            TAG4_X_THRESHOLD,
            theta_threshold=ID4_THETA_THRESHOLD,
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
        theta_err = resolve_theta_error(5, tag_yaw)
        mark_target_seen(
            5,
            dis_x=robot_tag_x,
            dis_y=robot_tag_y,
            theta=theta_err,
            now=now,
        )
        done = turn_to_tag(
            robot_tag_x,
            robot_tag_y,
            theta_err,
            ID5_X_OFFSET,
            ID5_Y_OFFSET,
            ID5_THETA_OFFSET,
            ID5_X_THRESHOLD,
            ID5_Y_THRESHOLD,
            ID5_THETA_THRESHOLD,
        )
        if done:
            return complete_current_tag(5)
        return False

    search_for_id()
    return False


def process_never_seen_missing():
    global ID, id3_blind_count, id4_blind_count, id5_blind_count

    dbg('process_never_seen_missing', 'ID=%s id3=%s id4=%s id5=%s',
        ID, id3_blind_count, id4_blind_count, id5_blind_count)
    # ID=4 预搜索使用自己的「原地扫描 → 参考航向恢复 → 前进1步」循环，
    # 不走原来的无限前进3步盲搜。
    if ID == 4 and id4_presearch_active:
        id4_blind_count += 1
        print(f"[ID=4预搜索] 当前未见码，第{id4_blind_count}次观察")
        return process_id4_presearch_missing()

    # ★ 盲搜前地磁介入：航向偏超容差就先转向（ID3 绕开切4号、ID5 从未见码直接放下也要先摆正）
    if blind_heading_guard():
        dbg('process_never_seen_missing', 'blind_heading_guard diverted')
        return False

    if ID == 3:
        id3_blind_count += 1
        print(f"[ID=3盲搜] 第{id3_blind_count}次")
        if id3_blind_count >= 1:
            BoxRMove2(2)
            BoxRMove1(1)
            BoxLturn30_2(1)
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
        print("[ID=5从未见码] 直接前进4步×3后放下物块")
        return complete_current_tag(5)

    search_for_id()
    return False


# ==================== 已见码后的丢码保护 ====================

def process_tag2_missing(now):
    """二号码丢码后按步数估算前后距离。对正界限仍是 TAG2_FORWARD_LIMIT。"""
    global lost_since
    global tag2_lost_baseline_dis_x, tag2_lost_forward_steps

    if lost_since is None:
        lost_since = now

    # 看见码时已写入基准并清零步数；这里只补「有最后距离但基准还空着」的情况。
    if tag2_lost_baseline_dis_x is None and last_seen_dis_x is not None:
        tag2_lost_baseline_dis_x = last_seen_dis_x
        print(
            f"[ID=2丢码基准] 保存最后距离="
            f"{tag2_lost_baseline_dis_x:.3f}m"
        )

    if tag2_lost_baseline_dis_x is None:
        lost_since = None
        print(
            "[ID=2丢码] 缺少最后距离，"
            "不能按步数估算，继续向前盲搜"
        )
        search_for_id()
        return False

    lost_duration = now - lost_since
    estimated_dis_x = (
        tag2_lost_baseline_dis_x
        - tag2_lost_forward_steps * TAG2_LOST_FORWARD_STEP_M
    )
    print(
        f"[ID=2丢码估算] 基准X={tag2_lost_baseline_dis_x:.3f}m，"
        f"累计前进={tag2_lost_forward_steps}步，"
        f"估算X={estimated_dis_x:.3f}m，"
        f"对正界限={TAG2_FORWARD_LIMIT:.3f}m"
    )

    # 估算已经进到原来的对正界限内：不再前进，沿用短暂保持后完成。
    if estimated_dis_x <= TAG2_FORWARD_LIMIT:
        if lost_duration < TAG_LOST_COMPLETE_SECONDS:
            print(
                f"[ID=2丢码保持] 估算X={estimated_dis_x:.3f}m，"
                f"已不大于对正界限{TAG2_FORWARD_LIMIT:.3f}m，"
                f"继续保持至 {TAG_LOST_COMPLETE_SECONDS:.1f} 秒"
            )
            time.sleep(SLEEP_LOST_HOLD_S)
            return False

        print(
            f"[ID=2丢码完成] 估算X={estimated_dis_x:.3f}m，"
            f"已到达对正界限{TAG2_FORWARD_LIMIT:.3f}m，假定已经对正"
        )
        return complete_current_tag(2)

    # 还没到界限：先等一等，避免丢一帧就接着走。
    if lost_duration < TAG4_OBSERVATION_WAIT_SECONDS:
        print(
            f"[ID=2丢码保持] 估算X={estimated_dis_x:.3f}m，"
            f"仍大于对正界限{TAG2_FORWARD_LIMIT:.3f}m，"
            f"已等待 {lost_duration:.2f} 秒"
        )
        time.sleep(SLEEP_LOST_HOLD_S)
        return False

    # 两步之后仍会停在界限外才进两步，否则进一步，避免一次跨过 0.155m。
    two_step_dis_x = estimated_dis_x - 2 * TAG2_LOST_FORWARD_STEP_M
    if two_step_dis_x > TAG2_FORWARD_LIMIT:
        move_steps = 2
        print(
            f"[ID=2远距恢复] 估算X={estimated_dis_x:.3f}m，"
            "前进2步后等待重新识别"
        )
        BoxGo2(1)
    else:
        move_steps = 1
        print(
            f"[ID=2中距恢复] 估算X={estimated_dis_x:.3f}m，"
            "前进1步后等待重新识别"
        )
        BoxGo1(1)

    tag2_lost_forward_steps += move_steps
    lost_since = None
    print(
        f"[ID=2丢码累计] 本次前进{move_steps}步，"
        f"累计{tag2_lost_forward_steps}步，"
        f"新估算X="
        f"{tag2_lost_baseline_dis_x - tag2_lost_forward_steps * TAG2_LOST_FORWARD_STEP_M:.3f}m"
    )
    return False


def tag4_last_lateral_angle_is_ready():
    """检查丢码前最后一次有效观测的横向位置与角度。"""
    if last_seen_dis_y is None or last_seen_theta is None:
        return False
    return (
        abs(last_seen_dis_y) <= ID4_POSE_Y_LIMIT_M
        and abs(last_seen_theta) <= ID4_POSE_THETA_LIMIT_DEG
    )


def tag4_last_pose_is_ready():
    if last_seen_dis_x is None:
        return False
    return (
        last_seen_dis_x - TAG4_X_OFFSET <= TAG4_FORWARD_ERROR
        and tag4_last_lateral_angle_is_ready()
    )


def process_tag4_missing(now):
    global lost_since, tag4_action_pending
    global tag4_lost_baseline_x_error, tag4_lost_forward_steps

    dbg(
        'process_tag4_missing',
        'now=%s lost_since=%s pending=%s last_x=%s baseline_x_error=%s steps=%s',
        now, lost_since, tag4_action_pending, last_seen_dis_x,
        tag4_lost_baseline_x_error, tag4_lost_forward_steps,
    )
    if lost_since is None:
        lost_since = now

    # 只在首次进入丢码估算时保存基准；动作后的观察等待会重置 lost_since，
    # 但不会重置此基准或累计步数。重新识别到 ID=4 时由 mark_target_seen 重置。
    if tag4_lost_baseline_x_error is None and last_seen_dis_x is not None:
        tag4_lost_baseline_x_error = last_seen_dis_x - TAG4_X_OFFSET
        print(
            f"[ID=4丢码基准] 保存最后有效 x_error="
            f"{tag4_lost_baseline_x_error:.3f}m，累计前进步数清零"
        )

    lost_duration = now - lost_since

    estimated_x_error = None
    if tag4_lost_baseline_x_error is not None:
        estimated_x_error = (tag4_lost_baseline_x_error
                             - tag4_lost_forward_steps * TAG4_LOST_FORWARD_STEP_M)
    estimated_ready = (estimated_x_error is not None
                       and estimated_x_error <= TAG4_FORWARD_ERROR
                       and tag4_last_lateral_angle_is_ready())

    # 全部姿态已达标才允许沿用短暂确认后完成；姿态不达标立即进入重捕获。
    if tag4_last_pose_is_ready() or estimated_ready:
        if lost_duration < TAG_LOST_COMPLETE_SECONDS:
            print(
                f"[ID=4丢码保持] 最后姿态已达标，"
                f"继续保持至 {TAG_LOST_COMPLETE_SECONDS:.1f} 秒"
            )
            time.sleep(SLEEP_LOST_HOLD_S)
            return False

        print(
            f"[ID=4丢码完成] 最后姿态达标："
            f"X={last_seen_dis_x:.3f}m，Y={last_seen_dis_y:.3f}m，"
            f"角度误差={last_seen_theta:.1f}°"
        )
        return complete_current_tag(4)

    if not id4_presearch_active or not id4_presearch_recovering:
        advance_done = id4_presearch_advance_done if id4_presearch_active else True
        print("[ID=4丢码恢复] 姿态尚未达标，立即有限扫描，重新看到后继续视觉对正")
        start_id4_presearch(advance_done=advance_done, recovering=True)
    return process_id4_presearch_missing()


def process_missing_marker(now=None):
    global lost_since
    global id4_presearch_consecutive

    if now is None:
        now = time.monotonic()

    if ID == 3 and id4_presearch_active and not id4_presearch_confirmed:
        id4_presearch_consecutive = 0

    if ID == 4:
        if tag_was_seen and aligning_tag_id == 4:
            return process_tag4_missing(now)
        if not id4_presearch_active:
            start_id4_presearch(advance_done=True)
        return process_id4_presearch_missing()

    if tag_was_seen and aligning_tag_id == ID:
        # ★ 地磁纠角：用地磁增量更新丢码前 θ，把剩余角打进该码死区；不追地磁目标朝向
        if mag_recover_turn(now=now):
            return False

        if ID == 2:
            return process_tag2_missing(now)

        if lost_since is None:
            lost_since = now
            print(
                f"[丢码保持] ID={ID} 已进入对正，"
                f"先保持 {TAG_LOST_COMPLETE_SECONDS:.1f} 秒"
            )
            time.sleep(SLEEP_LOST_HOLD_S)
            return False

        lost_duration = now - lost_since
        if lost_duration < TAG_LOST_COMPLETE_SECONDS:
            print(
                f"[丢码保持] ID={ID} 已丢失 "
                f"{lost_duration:.2f} 秒，机器人保持不动"
            )
            time.sleep(SLEEP_LOST_HOLD_S)
            return False

        target_id = ID
        print(
            f"[丢码直接完成] ID={target_id} 已连续丢失 "
            f"{lost_duration:.2f} 秒，假定已经对正"
        )
        return complete_current_tag(target_id)

    print(f"[盲搜] 当前目标 ID={ID}，从未见码，执行原盲搜")
    return process_never_seen_missing()


# ==================== 图像线程和主循环 ====================

def get_img():
    global Chest_img, ChestOrg

    image_reader_chest = ImgConverter()
    while not rospy.is_shutdown():
        ret, ChestOrg = image_reader_chest.chest_image()
        time.sleep(SLEEP_IMG_FETCH_S)
        if ChestOrg is not None:
            Chest_img = ChestOrg
            time.sleep(SLEEP_IMG_LOOP_OK_S)
        else:
            time.sleep(SLEEP_IMG_LOOP_NONE_S)


def start_image_thread():
    image_thread = threading.Thread(target=get_img)
    image_thread.setDaemon(True)
    image_thread.start()
    return image_thread


def run_loop(Tag):
    while not rospy.is_shutdown():
        # ★ 强制动作锁：执行强制性后置动作期间完全不介入（不读 marker、不发动作）
        if forced_action_lock:
            time.sleep(SLEEP_FORCED_LOCK_POLL_S)
            continue

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

        time.sleep(SLEEP_MAIN_LOOP_S)


def wait_for_action_service():
    print(
        f"[系统] 等待动作服务 action_receive "
        f"(最长 {ACTION_SERVICE_WAIT_SECONDS} 秒)..."
    )
    try:
        rospy.wait_for_service(
            "action_receive",
            timeout=ACTION_SERVICE_WAIT_SECONDS,
        )
    except rospy.ROSInterruptException:
        print("[系统] ROS 已关闭，取消启动并安全退出")
        return False
    except rospy.ROSException:
        print(
            "[系统错误] 30 秒内未检测到 action_receive 动作服务。"
            "请确认机器人已完成重启、动作服务已启动，再重新运行程序。"
        )
        return False

    print("[系统] 动作服务 action_receive 已就绪")
    return True


def main():
    # ---------- 航向标定模式：python test1.py --calib ----------
    if len(sys.argv) > 1 and sys.argv[1] == "--calib":
        rospy.init_node("heading_calib")
        if not mag_service_ready():
            print("[地磁标定] 服务 /get_magnet 不可用！请先确认 sensor_service_node 在运行")
            return
        print("[地磁标定] 正在把『此刻朝向』重置为 0 度（请让机器人处在启动朝向）")
        reset_heading_zero()
        print("[地磁标定] 持续打印『相对启动朝向』的偏转角，Ctrl+C 退出")
        print("[地磁标定] 用法：把机器人摆到目标朝向，读下面的数字，填进 HEADING_TARGET")
        while not rospy.is_shutdown():
            rel = current_relative_heading()
            if rel is None:
                print("[地磁标定] 相对启动朝向 = 读取失败")
            else:
                print(f"[地磁标定] 相对启动朝向 = {rel:+.1f}°")
            time.sleep(SLEEP_CALIB_POLL_S)
        return

    print("====== 机器人合并程序开始初始化 ======")
    print("[固定规则] 三种状态机：1=视觉搜寻+抱箱一个，2=直接抱起+抱箱二或四个，3=直接抱起+抱箱一个")
    print("[固定参数] 不读取标定，不启用自学习")

    rospy.init_node("image_listener")

    # ---------- 动作记录（纯日志）：把地磁 Δrel 与具体动作名对应起来 ----------
    if MAG_ASSIST and _install_action_recorder():
        print("[动作记录] 已启用 —— 日志会显示本周期下发的动作名")

    # ---------- 地磁服务自检 ----------
    if USE_MAG_HEADING or MAG_ASSIST:
        if mag_service_ready():
            if USE_MAG_HEADING:
                print("[地磁] 服务 /get_magnet 已就绪 —— 偏转角度由地磁决定")
            else:
                print("[地磁] 服务 /get_magnet 已就绪 —— 角度由摄像头决定，地磁只做「等转稳」辅助")
        else:
            print("[地磁][警告] 服务 /get_magnet 不可用！请确认 sensor_service_node 已启动")
            print("[地磁][警告] 地磁相关功能会自动跳过（不影响摄像头角度判定）")
    else:
        print("[地磁] 未启用：角度用摄像头，且无地磁辅助")

    if not wait_for_action_service():
        return

    Tag = TagConverter()
    start_image_thread()

    time.sleep(SLEEP_POST_INIT_S)
    print("[系统] 等待摄像头初始化 5 秒...")
    time.sleep(SLEEP_CAMERA_INIT_S)

    while ChestOrg is None and not rospy.is_shutdown():
        print("[系统] 等待胸部摄像头图像...")
        time.sleep(SLEEP_WAIT_CHEST_S)

    if rospy.is_shutdown():
        return

    print("[系统] 视觉已接入，等待每轮终端输入 1 / 2 / 3")
    # ---------- 【关键】重置初始方向：把启动时刻的朝向记为 0 度 ----------
    # （即使角度判定不用地磁，地磁辅助也需要这个零点来判断"转稳了没有"）
    if USE_MAG_HEADING or MAG_ASSIST:
        reset_heading_zero()
        if HEADING_ZERO is not None:
            if USE_MAG_HEADING:
                print(f"[地磁] 各码目标角度(相对启动朝向): {HEADING_TARGET}")
        else:
            print("[地磁] 初始方向重置失败 → 地磁辅助不可用（不影响摄像头角度判定）")

    try:
        run_loop(Tag)
    except rospy.ROSInterruptException as e:
        print("[系统] ROS 已关闭，机器人程序安全退出")
        dbg('main', 'ROSInterruptException: %s', e)
    except rospy.ServiceException as exc:
        print(f"[系统错误] 动作服务调用失败: {exc}")
        dbg('main', 'ServiceException: %s:%s', type(exc).__name__, exc)
    except KeyboardInterrupt as e:
        print("[系统] 收到手动停止指令，机器人程序安全退出")
        dbg('main', 'KeyboardInterrupt: %s', e)


if __name__ == "__main__":
    main()
