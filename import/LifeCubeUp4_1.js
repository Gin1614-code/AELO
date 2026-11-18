Blockly.Blocks['1752289906623'] = {
  init: function() {
    this.jsonInit({
      "type": "1752289906623",
      "message0": "LifeCubeUp4_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752289906623'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 29, 136, 98, 117, 149, 39, 98, 119, 170, 66, 98, 81, 50, 161, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 14, 164, 99, 151, 150, 60, 101, 124, 182, 44, 100, 44, 50, 136, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 13, 163, 100, 104, 132, 70, 100, 124, 181, 44, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(83, 12, 162, 100, 90, 55, 127, 100, 123, 181, 44, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752289906623'] = function(block) {
  let code = "base_action.action('LifeCubeUp4_1')\n";
  return code;
}

