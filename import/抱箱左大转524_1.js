Blockly.Blocks['1752309112734'] = {
  init: function() {
    this.jsonInit({
      "type": "1752309112734",
      "message0": "抱箱左大转524_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752309112734'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(65, 10, 149, 94, 53, 55, 93, 92, 140, 190, 50, 108, 76, 139, 43, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 91, 55, 129, 100, 140, 190, 50, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752309112734'] = function(block) {
  let code = "base_action.action('抱箱左大转524_1')\n";
  return code;
}

