Blockly.Blocks['1795816187021'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816187021",
      "message0": "four_bigleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816187021'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 95, 117, 83, 114, 96, 110, 190, 40, 95, 84, 115, 84, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 44, 96, 61, 123, 60, 110, 190, 40, 126, 103, 142, 76, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 69, 143, 112, 109, 93, 110, 190, 40, 117, 109, 180, 55, 109, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 95, 117, 83, 114, 96, 110, 190, 40, 95, 84, 115, 84, 97, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n";
  return code;
}

Blockly.Python['1795816187021'] = function(block) {
  let code = "base_action.action('four_bigleft')\n";
  return code;
}

