Blockly.Blocks['1778923517611'] = {
  init: function() {
    this.jsonInit({
      "type": "1778923517611",
      "message0": "smallleft1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778923517611'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(64,18,175,100,93,55,124,100,140,184,30,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(30)\nMOTOmove19(64,18,175,95,90,53,123,89,140,185,30,121,107,145,75,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(64,18,175,95,93,54,124,105,140,185,30,106,107,146,76,115,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(64,18,175,100,93,55,124,100,140,185,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778923517611'] = function(block) {
  let code = "base_action.action('smallleft1')\n";
  return code;
}

