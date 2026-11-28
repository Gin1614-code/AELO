Blockly.Blocks['1795816200945'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816200945",
      "message0": "four_front2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816200945'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 90, 91, 48, 129, 88, 110, 190, 40, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 125, 95, 110, 90, 110, 190, 40, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 右腿抬腿\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 93, 54, 123, 111, 110, 190, 40, 114, 87, 167, 44, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 88, 71, 45, 107, 90, 110, 190, 40, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 86, 110, 95, 100, 90, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816200945'] = function(block) {
  let code = "base_action.action('four_front2')\n";
  return code;
}

