Blockly.Blocks['1795816194353'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816194353",
      "message0": "four_boxup",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816194353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(93, 30, 100, 100, 93, 55, 124, 100, 110, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 56, 115, 65, 127, 150, 51, 78, 110, 141, 101, 142, 81, 50, 153, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 30, 171, 57, 142, 150, 48, 66, 110, 160, 32, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 49, 166, 47, 154, 142, 47, 62, 110, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 47, 154, 142, 47, 62, 110, 160, 31, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 47, 154, 142, 47, 62, 110, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 57, 140, 150, 69, 62, 110, 190, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 97, 107, 150, 59, 99, 110, 190, 40, 99, 96, 50, 144, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 98, 102, 77, 115, 98, 110, 190, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816194353'] = function(block) {
  let code = "base_action.action('four_boxup')\n";
  return code;
}

