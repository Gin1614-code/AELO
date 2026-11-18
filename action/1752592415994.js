Blockly.Blocks['1752592415994'] = {
  init: function() {
    this.jsonInit({
      "type": "1752592415994",
      "message0": "left30_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752592415994'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 115, 95, 72, 55, 102, 95, 120, 170, 115, 105, 87, 145, 56, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 115, 95, 72, 55, 102, 93, 120, 170, 115, 105, 87, 145, 56, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1752592415994'] = function(block) {
  let code = "base_action.action('left30_2')\n";
  return code;
}

