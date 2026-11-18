Blockly.Blocks['1747317413349'] = {
  init: function() {
    this.jsonInit({
      "type": "1747317413349",
      "message0": "自动-抱箱右转1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747317413349'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(60,15,190,74,143,54,171,75,132,187,10,116,154,146,125,114,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1747317413349'] = function(block) {
  let code = "base_action.action('自动-抱箱右转1')\n";
  return code;
}

