Blockly.Blocks['1778924129526'] = {
  init: function() {
    this.jsonInit({
      "type": "1778924129526",
      "message0": "smallright2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778924129526'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(64,18,175,100,93,55,124,100,140,184,30,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(30)\nMOTOmove19(64,18,175,82,92,53,124,99,140,184,30,110,107,146,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64,18,175,94,93,54,124,85,140,184,30,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(64,18,175,100,93,55,124,100,140,184,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778924129526'] = function(block) {
  let code = "base_action.action('smallright2')\n";
  return code;
}

