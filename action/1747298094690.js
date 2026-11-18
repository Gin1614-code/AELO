Blockly.Blocks['1747298094690'] = {
  init: function() {
    this.jsonInit({
      "type": "1747298094690",
      "message0": "BoxTurnR111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747298094690'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,99,83,55,118,97,132,187,10,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,83,55,118,93,132,187,10,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747298094690'] = function(block) {
  let code = "base_action.action('BoxTurnR111')\n";
  return code;
}

