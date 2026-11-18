# -*- coding: utf-8 -*-
"""重复执行一个动作。

动作名改下面的 ACTION_NAME。
运行后在终端输入重复次数。
"""

import sys
import time

import rospy

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action

# 改这里：要重复执行的动作名
ACTION_NAME = "qian4"
# 两次动作之间的间隔（秒）。动作服务发完即返回，间隔太短会叠在一起。
ACTION_GAP_S = 0.5
ACTION_SERVICE_WAIT_SECONDS = 30


def ask_repeat_count():
    while True:
        text = input("请输入重复次数：").strip()
        try:
            count = int(text)
        except ValueError:
            print("[输入无效] 请输入正整数")
            continue
        if count <= 0:
            print("[输入无效] 次数必须大于 0")
            continue
        return count


def main():
    print("====== 单动作重复测试 ======")
    print(f"[动作] 本次执行: {ACTION_NAME}")
    print("[提示] 要换动作，先改代码里的 ACTION_NAME 再重新运行")
    count = ask_repeat_count()

    rospy.init_node("action_repeat_test")
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
        print("[系统] ROS 已关闭，取消测试")
        return
    except rospy.ROSException:
        print(
            "[系统错误] 30 秒内未检测到 action_receive 动作服务。"
            "请确认机器人已完成重启、动作服务已启动，再重新运行程序。"
        )
        return

    print("[系统] 动作服务 action_receive 已就绪")
    print(f"[开始] {ACTION_NAME} × {count}")
    try:
        for i in range(1, count + 1):
            if rospy.is_shutdown():
                print("[系统] ROS 已关闭，停止测试")
                return
            print(f"[动作] 第 {i}/{count} 次: {ACTION_NAME}")
            base_action.action(ACTION_NAME)
            time.sleep(ACTION_GAP_S)
    except rospy.ROSInterruptException:
        print("[系统] ROS 已关闭，停止测试")
        return
    except KeyboardInterrupt:
        print("[系统] 收到手动停止指令，停止测试")
        return

    print(f"[完成] 已执行 {count} 次 {ACTION_NAME}")


if __name__ == "__main__":
    main()
