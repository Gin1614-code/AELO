Blockly.Blocks['1748345281533'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345281533",
      "message0": "BTLS3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345281533'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(100)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 96, 132, 187, 10, 107, 139, 145, 79, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 96, 97, 55, 130, 103, 132, 187, 10, 101, 117, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(20)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748345281533'] = function(block) {
  let code = "base_action.action('BTLS3')\n";
  return code;
}

