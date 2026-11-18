Blockly.Blocks['1784228311745'] = {
  init: function() {
    this.jsonInit({
      "type": "1784228311745",
      "message0": "x_leftturn10_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784228311745'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(68,19,185,96,97,55,130,96,136,184,15,101,117,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,96,97,55,130,103,136,184,15,101,117,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,100,88,55,124,100,136,184,15,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,100,93,55,124,100,136,184,15,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1784228311745'] = function(block) {
  let code = "base_action.action('x_leftturn10_1')\n";
  return code;
}

