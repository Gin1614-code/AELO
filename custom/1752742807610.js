Blockly.Blocks['1752742807610'] = {
  init: function() {
    this.jsonInit({
      "type": "1752742807610",
      "message0": "leftmovefyt3改过手一个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752742807610'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(30)\nMOTOmove19(63,10,161,100,93,55,129,99,140,190,43,100,107,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(63,10,161,78,112,90,108,95,140,190,43,122,102,142,72,93,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(63,10,161,100,93,54,129,99,140,190,43,103,107,146,71,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,100,93,55,129,99,140,190,43,100,107,145,71,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(63,10,185,100,90,55,127,100,140,190,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752742807610'] = function(block) {
  let code = "base_action.action('leftmovefyt3改过手一个')\n";
  return code;
}

