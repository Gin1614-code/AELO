Blockly.Blocks['1795816213692'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816213692",
      "message0": "four_rightturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816213692'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 99, 83, 55, 118, 97, 110, 190, 40, 104, 103, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 99, 83, 55, 118, 93, 110, 190, 40, 104, 103, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 93, 65, 119, 96, 110, 190, 40, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 88, 55, 124, 100, 110, 190, 40, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816213692'] = function(block) {
  let code = "base_action.action('four_rightturn10')\n";
  return code;
}

