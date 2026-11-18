Blockly.Blocks['1752588478593'] = {
  init: function() {
    this.jsonInit({
      "type": "1752588478593",
      "message0": "LeftMovefyt222",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752588478593'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 100, 93, 55, 129, 99, 132, 190, 10, 100, 107, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 78, 112, 90, 108, 95, 132, 190, 10, 122, 102, 142, 72, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 100, 93, 54, 129, 99, 132, 190, 10, 103, 107, 146, 71, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(60, 11, 190, 100, 93, 55, 129, 99, 132, 190, 10, 100, 107, 145, 71, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1752588478593'] = function(block) {
  let code = "base_action.action('LeftMovefyt222')\n";
  return code;
}

