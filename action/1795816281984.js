Blockly.Blocks['1795816281984'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816281984",
      "message0": "one_smallright",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816281984'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 82, 88, 53, 124, 99, 140, 184, 25, 110, 111, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(64, 18, 180, 82, 88, 53, 124, 99, 140, 184, 25, 99, 111, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(17)\nMOTOmove19(64, 18, 180, 94, 88, 54, 124, 85, 140, 184, 25, 105, 111, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816281984'] = function(block) {
  let code = "base_action.action('one_smallright')\n";
  return code;
}

