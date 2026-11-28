Blockly.Blocks['1795816229376'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816229376",
      "message0": "four_smallright（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816229376'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 82, 88, 53, 124, 99, 110, 190, 40, 110, 111, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(93, 10, 163, 82, 88, 53, 124, 99, 110, 190, 40, 99, 111, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(17)\nMOTOmove19(93, 10, 163, 94, 88, 54, 124, 85, 110, 190, 40, 105, 111, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816229376'] = function(block) {
  let code = "base_action.action('four_smallright（2）')\n";
  return code;
}

