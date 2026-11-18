Blockly.Blocks['1778229711452'] = {
  init: function() {
    this.jsonInit({
      "type": "1778229711452",
      "message0": "yy",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778229711452'] = function(block) {
  let code = "MOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,100,93,55,124,100,140,170,30,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(55,29,175,90,93,54,124,100,140,170,30,110,107,146,76,110,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(55,29,175,94,93,54,124,85,140,170,30,105,107,146,76,95,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(20)\nMOTOmove19(55,29,175,85,93,54,124,85,140,170,30,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85)\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,100,93,55,124,100,140,170,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778229711452'] = function(block) {
  let code = "base_action.action('yy')\n";
  return code;
}

