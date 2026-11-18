Blockly.Blocks['1780400636862'] = {
  init: function() {
    this.jsonInit({
      "type": "1780400636862",
      "message0": "rightturn1011",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780400636862'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(20)\nMOTOmove19(64,18,161,95,103,62,133,95,140,184,43,103,115,131,92,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(64,19,161,100,93,55,124,100,140,184,43,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64,19,185,100,90,55,127,100,140,184,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780400636862'] = function(block) {
  let code = "base_action.action('rightturn1011')\n";
  return code;
}

