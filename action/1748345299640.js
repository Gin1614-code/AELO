Blockly.Blocks['1748345299640'] = {
  init: function() {
    this.jsonInit({
      "type": "1748345299640",
      "message0": "BTRS3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748345299640'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(60, 15, 190, 99, 62, 55, 115, 107, 132, 187, 10, 104, 103, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 99, 83, 55, 118, 93, 132, 187, 10, 104, 103, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 65, 119, 96, 132, 187, 10, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 88, 55, 124, 100, 132, 187, 10, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748345299640'] = function(block) {
  let code = "base_action.action('BTRS3')\n";
  return code;
}

