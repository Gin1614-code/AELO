Blockly.Blocks['1795816221717'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816221717",
      "message0": "four_smallleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816221717'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 102, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 95, 86, 53, 123, 89, 110, 190, 40, 121, 110, 145, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 95, 86, 53, 123, 99, 110, 190, 40, 108, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 95, 89, 54, 124, 105, 110, 190, 40, 106, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816221717'] = function(block) {
  let code = "base_action.action('four_smallleft')\n";
  return code;
}

