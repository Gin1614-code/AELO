Blockly.Blocks['1780401143598'] = {
  init: function() {
    this.jsonInit({
      "type": "1780401143598",
      "message0": "leftturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780401143598'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(64,18,161,101,85,51,126,94,140,184,43,108,89,147,55,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,19,161,100,93,55,124,100,140,184,43,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64,19,185,100,90,55,127,100,140,184,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780401143598'] = function(block) {
  let code = "base_action.action('leftturn10')\n";
  return code;
}

