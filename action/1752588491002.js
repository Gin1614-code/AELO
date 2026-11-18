Blockly.Blocks['1752588491002'] = {
  init: function() {
    this.jsonInit({
      "type": "1752588491002",
      "message0": "RightMove_fyt3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752588491002'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 78, 120, 64, 135, 93, 143, 190, 10, 124, 78, 122, 75, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 97, 93, 54, 129, 95, 143, 190, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 11, 190, 100, 93, 55, 129, 95, 143, 190, 10, 100, 107, 146, 71, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752588491002'] = function(block) {
  let code = "base_action.action('RightMove_fyt3')\n";
  return code;
}

