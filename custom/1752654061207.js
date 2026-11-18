Blockly.Blocks['1752654061207'] = {
  init: function() {
    this.jsonInit({
      "type": "1752654061207",
      "message0": "RightMove_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752654061207'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,78,120,64,135,93,137,173,15,124,78,122,75,119,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,97,93,54,129,95,137,173,15,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,55,129,95,137,173,15,100,107,146,71,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752654061207'] = function(block) {
  let code = "base_action.action('RightMove_2')\n";
  return code;
}

