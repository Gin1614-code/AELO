Blockly.Blocks['1749042588537'] = {
  init: function() {
    this.jsonInit({
      "type": "1749042588537",
      "message0": "slow_right_turn6_4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749042588537'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749042588537'] = function(block) {
  let code = "base_action.action('slow_right_turn6_4')\n";
  return code;
}

