Blockly.Blocks['1752592422309'] = {
  init: function() {
    this.jsonInit({
      "type": "1752592422309",
      "message0": "right30_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752592422309'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 85, 95, 113, 55, 143, 95, 120, 170, 85, 105, 123, 145, 103, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 85, 95, 112, 55, 142, 93, 120, 170, 85, 105, 122, 145, 102, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1752592422309'] = function(block) {
  let code = "base_action.action('right30_2')\n";
  return code;
}

