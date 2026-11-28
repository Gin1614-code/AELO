Blockly.Blocks['1795816218117'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816218117",
      "message0": "four_rightturn30",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816218117'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(93, 10, 163, 95, 106, 55, 143, 95, 110, 190, 40, 105, 142, 145, 103, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 100, 90, 55, 127, 100, 110, 190, 40, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816218117'] = function(block) {
  let code = "base_action.action('four_rightturn30')\n";
  return code;
}

