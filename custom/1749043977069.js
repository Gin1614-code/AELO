Blockly.Blocks['1749043977069'] = {
  init: function() {
    this.jsonInit({
      "type": "1749043977069",
      "message0": "BoxTurnR2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749043977069'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,90,111,70,131,89,132,187,10,100,134,146,97,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749043977069'] = function(block) {
  let code = "base_action.action('BoxTurnR2')\n";
  return code;
}

