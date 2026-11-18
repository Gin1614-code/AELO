Blockly.Blocks['1784228117365'] = {
  init: function() {
    this.jsonInit({
      "type": "1784228117365",
      "message0": "x_smallleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784228117365'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(68,18,180,100,89,55,124,100,136,184,25,102,110,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(68,18,180,95,86,53,123,89,136,184,25,121,110,145,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68,18,180,95,86,53,123,99,136,184,25,108,110,146,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(68,18,180,95,89,54,124,105,136,184,25,106,110,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(64,18,180,100,89,55,124,100,136,184,25,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1784228117365'] = function(block) {
  let code = "base_action.action('x_smallleft')\n";
  return code;
}

