# -*- coding: utf-8 -*-
"""单动作重复测试工具。

运行流程：
  1. 输入要执行的动作名（如 front1_quick1 / bigright_10 / boxdown）
  2. 输入重复次数
  3. 执行完成后询问是否继续验证下一个动作，输入 y 继续、n 退出
"""

import sys
import time

import rospy

sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")
from leju import base_action

# 两次动作之间的间隔（秒）。动作服务发完即返回，间隔太短会叠在一起。
ACTION_GAP_S = 0.5
ACTION_SERVICE_WAIT_SECONDS = 30


def ask_action_name(default=None):
    """输入动作名；直接回车沿用上一次。返回 None 表示退出。"""
    while True:
        if default:
            prompt = f"请输入动作名（回车沿用上一次 {default}，输入 q 退出）："
        else:
            prompt = "请输入动作名（输入 q 退出）："
        text = input(prompt).strip()

        if text.lower() == "q":
            return None
        if text == "":
            if default:
                return default
            print("[输入无效] 动作名不能为空")
            continue
        return text


def ask_repeat_count():
    """输入重复次数；回车默认 1。"""
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


def ask_again():
    """是否继续验证下一个动作。"""
    while True:
        text = input("是否继续验证动作？（y = 继续，n = 退出）：").strip().lower()
        if text in ("y", "yes"):
            return True
        if text in ("n", "no", ""):
            return False
        print("[输入无效] 请输入 y 或 n")


def run_action(action_name, count):
    """执行 action_name 共 count 次。返回 False 表示中途被中断。"""
    print("=" * 50)
    print(f"[开始] {action_name} × {count}")
    print("=" * 50)

    try:
        for i in range(1, count + 1):
            if rospy.is_shutdown():
                print("[系统] ROS 已关闭，停止测试")
                return False
            print(f"[动作] 第 {i}/{count} 次: {action_name}")
            base_action.action(action_name)
            time.sleep(ACTION_GAP_S)
    except rospy.ROSInterruptException:
        print("[系统] ROS 已关闭，停止测试")
        return False
    except KeyboardInterrupt:
        print("\n[系统] 收到手动停止指令，停止测试")
        return False

    print(f"[完成] 已执行 {count} 次 {action_name}")
    return True


def main():
    print("====== 单动作重复测试 ======")
    print("[提示] 动作名必须和机器人里已下载的动作完全一致，错一个字符机器人不会动")

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

    last_action = None

    try:
        while True:
            if rospy.is_shutdown():
                print("[系统] ROS 已关闭，停止测试")
                return

            # ① 输入动作名
            action_name = ask_action_name(default=last_action)
            if action_name is None:
                print("[退出] 已取消测试")
                return

            # ② 输入重复次数
            count = ask_repeat_count()

            # ③ 执行
            if not run_action(action_name, count):
                return

            last_action = action_name

            # ④ 询问是否继续验证
            if not ask_again():
                print("[退出] 测试结束")
                return

    except KeyboardInterrupt:
        print("\n[系统] 收到手动停止指令，停止测试")
        return


if __name__ == "__main__":
    main()