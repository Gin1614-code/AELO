import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *



def main():
    nodes.node_initial()
    try:


        base_action.action('front1_quick1')
        base_action.action('front2_quick2')
        base_action.action('front3ad')
        base_action.action('front4_quick2')
        base_action.action('smallleft')
        base_action.action('smallright')
        base_action.action('bigleft16')
        base_action.action('bigright_10')
        base_action.action('boxup17')
        base_action.action('leftturn30_1')
        base_action.action('rightturn30_1')
        base_action.action('leftturn10_1')
        base_action.action('rightturn10_1')
        base_action.action('x_front1step_3')
        base_action.action('x_front2step_3')
        base_action.action('x_front3step_3')
        base_action.action('x_front4step_3')
        base_action.action('x_bigleft')
        base_action.action('x_bigright')
        base_action.action('x_smallleft')
        base_action.action('x_smallright')
        base_action.action('x_leftturn30_1')
        base_action.action('x_rightturn30_1')
        base_action.action('x_leftturn10_1')
        base_action.action('x_rightturn10_1')
        base_action.action('boxdown')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
