Blockly.Blocks['1795701425324'] = {
  init: function() {
    this.jsonInit({
      "type": "1795701425324",
      "message0": "front1_new1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795701425324'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 85, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 96, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 113, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68, 18, 169, 106, 95, 54, 128, 113, 136, 184, 32, 113, 88, 119, 88, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(68, 18, 169, 106, 95, 54, 128, 113, 136, 184, 32, 111, 92, 135, 78, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795701425324'] = function(block) {
  let code = "base_action.action('front1_new1')\n";
  return code;
}

