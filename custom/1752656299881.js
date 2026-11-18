Blockly.Blocks['1752656299881'] = {
  init: function() {
    this.jsonInit({
      "type": "1752656299881",
      "message0": "Box_Leftturn90两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752656299881'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,18,148,99,44,55,86,93,139,177,50,106,56,131,40,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,18,148,100,91,55,129,100,138,179,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(62,25,185,100,90,55,127,100,142,175,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752656299881'] = function(block) {
  let code = "base_action.action('Box_Leftturn90两个')\n";
  return code;
}

