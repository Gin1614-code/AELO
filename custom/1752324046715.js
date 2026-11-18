Blockly.Blocks['1752324046715'] = {
  init: function() {
    this.jsonInit({
      "type": "1752324046715",
      "message0": "czh",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752324046715'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752324046715'] = function(block) {
  let code = "base_action.action('czh')\n";
  return code;
}

