Blockly.Blocks['1780755100739'] = {
  init: function() {
    this.jsonInit({
      "type": "1780755100739",
      "message0": "rightturn10_3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780755100739'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 161, 95, 103, 62, 133, 95, 140, 184, 43, 103, 115, 131, 92, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(64, 19, 161, 100, 93, 55, 124, 100, 140, 184, 43, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 100, 90, 55, 127, 100, 140, 184, 15, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780755100739'] = function(block) {
  let code = "base_action.action('rightturn10_3')\n";
  return code;
}

