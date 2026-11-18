Blockly.Blocks['1779790888348'] = {
  init: function() {
    this.jsonInit({
      "type": "1779790888348",
      "message0": "111111",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779790888348'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 100, 91, 55, 129, 100, 140, 184, 32, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(64, 18, 169, 90, 91, 48, 134, 88, 140, 184, 32, 94, 109, 146, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 86, 126, 65, 144, 86, 140, 184, 32, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 88, 115, 31, 160, 86, 140, 184, 32, 93, 104, 131, 87, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 107, 98, 56, 129, 111, 140, 184, 32, 114, 134, 148, 94, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 106, 93, 54, 128, 113, 140, 184, 32, 111, 90, 139, 57, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 106, 91, 54, 128, 111, 140, 184, 32, 114, 89, 163, 39, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 88, 69, 45, 112, 90, 140, 184, 32, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 86, 91, 105, 79, 88, 140, 184, 32, 93, 102, 144, 71, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64, 18, 169, 86, 126, 65, 144, 86, 140, 184, 32, 94, 109, 146, 71, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 18, 169, 88, 115, 31, 160, 86, 140, 184, 32, 93, 104, 131, 87, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 107, 98, 56, 129, 111, 140, 184, 32, 111, 129, 148, 96, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64, 18, 169, 106, 93, 54, 128, 113, 140, 184, 32, 111, 90, 139, 57, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64, 18, 169, 100, 91, 55, 129, 100, 140, 184, 32, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779790888348'] = function(block) {
  let code = "base_action.action('111111')\n";
  return code;
}

