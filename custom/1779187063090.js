Blockly.Blocks['1779187063090'] = {
  init: function() {
    this.jsonInit({
      "type": "1779187063090",
      "message0": "smallright-2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779187063090'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(15)\nMOTOmove19(55,29,175,100,89,55,124,100,140,170,30,100,110,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(15)\nMOTOmove19(55,29,175,82,88,53,124,99,140,170,30,110,111,146,76,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(55,29,175,82,88,53,124,99,140,170,30,99,111,146,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(17)\nMOTOmove19(55,29,175,94,88,54,124,85,140,170,30,105,111,146,76,95,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(18)\nMOTOmove19(55,29,175,100,89,55,124,100,140,170,30,100,110,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779187063090'] = function(block) {
  let code = "base_action.action('smallright-2')\n";
  return code;
}

