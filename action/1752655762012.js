Blockly.Blocks['1752655762012'] = {
  init: function() {
    this.jsonInit({
      "type": "1752655762012",
      "message0": "Box_Rightturn90一个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752655762012'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,102,138,69,160,101,140,190,50,106,174,175,108,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(59,15,185,100,90,55,127,100,141,185,14,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752655762012'] = function(block) {
  let code = "base_action.action('Box_Rightturn90一个')\n";
  return code;
}

