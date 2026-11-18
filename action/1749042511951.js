Blockly.Blocks['1749042511951'] = {
  init: function() {
    this.jsonInit({
      "type": "1749042511951",
      "message0": "lifeturn6_4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1749042511951'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(60,15,190,98,76,54,109,101,132,187,10,104,86,136,65,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,97,57,118,101,132,187,10,104,91,153,57,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,65,119,96,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,88,55,124,100,132,187,10,100,112,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1749042511951'] = function(block) {
  let code = "base_action.action('lifeturn6_4')\n";
  return code;
}

