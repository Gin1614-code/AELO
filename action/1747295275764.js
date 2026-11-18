Blockly.Blocks['1747295275764'] = {
  init: function() {
    this.jsonInit({
      "type": "1747295275764",
      "message0": "turn003R1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747295275764'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,110,55,139,97,120,170,85,105,122,145,91,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(24)\nMOTOmove19(80,30,85,95,110,55,139,95,120,170,85,105,122,145,91,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(27)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1747295275764'] = function(block) {
  let code = "base_action.action('turn003R1')\n";
  return code;
}

