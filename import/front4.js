Blockly.Blocks['1777020337370'] = {
  init: function() {
    this.jsonInit({
      "type": "1777020337370",
      "message0": "front4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1777020337370'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 100, 91, 55, 129, 100, 140, 184, 32, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(64, 18, 169, 90, 91, 48, 134, 88, 140, 184, 32, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 86, 123, 95, 115, 90, 140, 184, 32, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 86, 119, 35, 169, 87, 140, 184, 32, 91, 104, 131, 87, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 107, 98, 56, 129, 111, 140, 184, 32, 111, 129, 148, 96, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 106, 93, 54, 128, 113, 140, 184, 32, 114, 77, 105, 85, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 106, 91, 54, 128, 111, 140, 184, 32, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 88, 69, 45, 112, 90, 140, 184, 32, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 86, 123, 95, 115, 90, 140, 184, 32, 94, 107, 146, 72, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 100, 91, 55, 129, 100, 140, 184, 32, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1777020337370'] = function(block) {
  let code = "base_action.action('front4')\n";
  return code;
}

