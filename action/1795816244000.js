Blockly.Blocks['1795816244000'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816244000",
      "message0": "one_front1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816244000'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 88, 136, 184, 32, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 125, 95, 110, 90, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816244000'] = function(block) {
  let code = "base_action.action('one_front1')\n";
  return code;
}

