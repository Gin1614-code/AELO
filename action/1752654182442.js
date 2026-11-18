Blockly.Blocks['1752654182442'] = {
  init: function() {
    this.jsonInit({
      "type": "1752654182442",
      "message0": "BoxLeftTurn_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752654182442'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,10,185,99,31,55,86,93,140,190,15,106,88,131,40,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,185,100,91,55,129,100,140,190,15,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752654182442'] = function(block) {
  let code = "base_action.action('BoxLeftTurn_2')\n";
  return code;
}

