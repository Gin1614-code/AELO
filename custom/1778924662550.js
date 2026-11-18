Blockly.Blocks['1778924662550'] = {
  init: function() {
    this.jsonInit({
      "type": "1778924662550",
      "message0": "rightturn7-1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778924662550'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(64,18,185,99,83,55,118,97,140,184,15,104,103,145,70,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,18,185,99,83,55,118,93,140,184,15,104,103,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,18,185,100,93,65,119,96,140,184,15,100,112,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64,18,185,100,88,55,124,100,140,184,15,100,112,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778924662550'] = function(block) {
  let code = "base_action.action('rightturn7-1')\n";
  return code;
}

