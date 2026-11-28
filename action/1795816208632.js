Blockly.Blocks['1795816208632'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816208632",
      "message0": "four_leftturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816208632'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 96, 97, 55, 130, 96, 110, 190, 40, 101, 117, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 96, 97, 55, 130, 103, 110, 190, 40, 101, 117, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 88, 55, 124, 100, 110, 190, 40, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816208632'] = function(block) {
  let code = "base_action.action('four_leftturn10')\n";
  return code;
}

