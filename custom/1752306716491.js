Blockly.Blocks['1752306716491'] = {
  init: function() {
    this.jsonInit({
      "type": "1752306716491",
      "message0": "Box_Squat",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752306716491'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(83,12,162,100,90,55,127,100,123,181,44,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 下蹲2\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,103,113,150,62,101,123,181,44,103,89,50,142,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752306716491'] = function(block) {
  let code = "base_action.action('Box_Squat')\n";
  return code;
}

