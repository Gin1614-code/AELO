Blockly.Blocks['1784228361567'] = {
  init: function() {
    this.jsonInit({
      "type": "1784228361567",
      "message0": "x_rightturn10_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784228361567'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(68,19,185,99,83,55,118,97,136,184,15,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,99,83,55,118,93,136,184,15,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,100,93,65,119,96,136,184,15,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68,19,185,100,88,55,124,100,136,184,15,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1784228361567'] = function(block) {
  let code = "base_action.action('x_rightturn10_1')\n";
  return code;
}

