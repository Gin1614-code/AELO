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

def Box_Down(n):   
    for i in range (0,n):
        base_action.action("leftturn30_4")
        print("***********************************************************************************")
        print('机器人启动')
        time.sleep(1)
        
if __name__ == '__main__':
  
  Box_Down(1)