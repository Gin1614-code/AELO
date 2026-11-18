Blockly.Blocks['1778925179204'] = {
  init: function() {
    this.jsonInit({
      "type": "1778925179204",
      "message0": "lturn7-1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778925179204'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(64,19,185,96,97,55,130,96,140,184,15,101,117,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,19,185,96,97,55,130,103,140,184,15,101,117,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,19,185,100,88,55,124,100,140,184,15,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,19,185,100,93,55,124,100,140,184,15,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778925179204'] = function(block) {
  let code = "base_action.action('lturn7-1')\n";
  return code;
}

