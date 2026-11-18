Blockly.Blocks['1779189472156'] = {
  init: function() {
    this.jsonInit({
      "type": "1779189472156",
      "message0": "smallleft_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779189472156'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(55,29,175,100,89,55,124,100,140,170,30,102,110,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(55,29,175,95,86,53,123,89,140,170,30,121,110,145,75,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(55,29,175,95,86,53,123,99,140,170,30,108,110,146,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(25)\nMOTOmove19(55,29,175,95,89,54,124,105,140,170,30,106,110,146,76,115,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(55,29,175,100,89,55,124,100,140,170,30,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779189472156'] = function(block) {
  let code = "base_action.action('smallleft_2')\n";
  return code;
}

