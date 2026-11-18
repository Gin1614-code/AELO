Blockly.Blocks['1793366674996'] = {
  init: function() {
    this.jsonInit({
      "type": "1793366674996",
      "message0": "smallleft_change",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1793366674996'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(15)\nMOTOmove19(64,18,180,100,89,55,124,100,140,184,25,102,110,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64,18,180,100,89,55,124,100,140,184,25,102,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1793366674996'] = function(block) {
  let code = "base_action.action('smallleft_change')\n";
  return code;
}

