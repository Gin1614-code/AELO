Blockly.Blocks['1752653978287'] = {
  init: function() {
    this.jsonInit({
      "type": "1752653978287",
      "message0": "LeftMove_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752653978287'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,55,129,99,137,173,15,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,78,112,90,108,95,137,173,15,122,102,142,72,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,54,129,99,137,173,15,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,185,100,93,55,129,99,137,173,15,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1752653978287'] = function(block) {
  let code = "base_action.action('LeftMove_2')\n";
  return code;
}

