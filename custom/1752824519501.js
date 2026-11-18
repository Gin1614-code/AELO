Blockly.Blocks['1752824519501'] = {
  init: function() {
    this.jsonInit({
      "type": "1752824519501",
      "message0": "BoxForward02两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752824519501'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(74,19,185,90,91,48,134,88,137,173,15,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,86,113,85,115,90,137,173,15,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,86,121,37,161,88,137,173,15,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(74,19,185,107,98,56,129,111,137,173,15,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,106,93,54,128,113,137,173,15,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,55,124,100,137,173,15,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752824519501'] = function(block) {
  let code = "base_action.action('BoxForward02两个')\n";
  return code;
}

