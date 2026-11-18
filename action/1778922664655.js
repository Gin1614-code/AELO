Blockly.Blocks['1778922664655'] = {
  init: function() {
    this.jsonInit({
      "type": "1778922664655",
      "message0": "2boxup6_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1778922664655'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(82, 16, 161, 100, 90, 55, 127, 100, 132, 177, 44, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 张\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79, 43, 148, 100, 136, 150, 62, 100, 119, 158, 49, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 30, 136, 99, 118, 150, 41, 99, 113, 169, 66, 99, 81, 50, 160, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 29, 136, 98, 117, 149, 39, 98, 119, 170, 66, 98, 81, 50, 161, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(69, 10, 135, 98, 117, 149, 39, 98, 136, 186, 66, 98, 81, 50, 161, 98, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(5)\nMOTOmove19(69, 10, 164, 98, 117, 149, 39, 98, 138, 186, 44, 98, 81, 50, 161, 98, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(69, 10, 161, 100, 104, 132, 70, 100, 138, 186, 43, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(69, 10, 161, 100, 90, 55, 127, 100, 138, 186, 43, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(69, 10, 185, 100, 90, 55, 127, 100, 138, 186, 15, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1778922664655'] = function(block) {
  let code = "base_action.action('2boxup6_1')\n";
  return code;
}

