Blockly.Blocks['1752306617401'] = {
  init: function() {
    this.jsonInit({
      "type": "1752306617401",
      "message0": "Box_Rightturn",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752306617401'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 下蹲2\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,103,113,150,62,101,123,181,44,103,89,50,142,102,0,0,100)\nMOTOwait()\n\n\n-- 伸右腿3\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,38,126,150,63,68,123,181,44,124,87,50,149,136,0,0,100)\nMOTOwait()\n\n\n-- 结束\nMOTOsetspeed(30)\nMOTOmove19(83,12,162,103,119,150,67,100,123,181,44,104,84,50,140,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752306617401'] = function(block) {
  let code = "base_action.action('Box_Rightturn')\n";
  return code;
}

