Blockly.Blocks['1752308748084'] = {
  init: function() {
    this.jsonInit({
      "type": "1752308748084",
      "message0": "Box_Leftmove",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752308748084'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 下蹲2\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,103,113,150,62,101,123,181,44,103,89,50,142,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,73,145,150,75,60,123,181,44,167,63,50,133,132,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,103,119,150,67,100,123,181,44,104,84,50,140,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752308748084'] = function(block) {
  let code = "base_action.action('Box_Leftmove')\n";
  return code;
}

