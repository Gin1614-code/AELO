Blockly.Blocks['1752492222903'] = {
  init: function() {
    this.jsonInit({
      "type": "1752492222903",
      "message0": "又是改一半（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752492222903'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 100, 90, 55, 127, 100, 137, 173, 43, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 降低重心\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 100, 71, 56, 117, 100, 137, 173, 43, 100, 130, 142, 83, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬起左腿\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 98, 90, 66, 128, 96, 137, 173, 43, 99, 130, 142, 83, 92, 0, 0, 100)\nMOTOwait()\n\n\n-- 放下左腿改变重心\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 103, 104, 66, 128, 104, 137, 173, 43, 103, 117, 133, 90, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬起右腿\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 97, 104, 66, 128, 108, 137, 173, 43, 98, 110, 133, 84, 106, 0, 0, 100)\nMOTOwait()\n\n\n-- 迈出右腿\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 97, 104, 66, 128, 108, 137, 173, 43, 101, 87, 153, 41, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 102, 50, 56, 94, 100, 137, 173, 43, 102, 124, 118, 104, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 105, 89, 74, 112, 101, 137, 173, 43, 108, 90, 133, 60, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 97, 116, 66, 128, 106, 137, 173, 43, 98, 104, 106, 113, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74, 19, 161, 97, 104, 55, 151, 96, 137, 173, 43, 99, 130, 142, 83, 92, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752492222903'] = function(block) {
  let code = "base_action.action('又是改一半（2）')\n";
  return code;
}

