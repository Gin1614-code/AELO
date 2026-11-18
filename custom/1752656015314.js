Blockly.Blocks['1752656015314'] = {
  init: function() {
    this.jsonInit({
      "type": "1752656015314",
      "message0": "Box_Leftturn90一个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752656015314'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,99,44,55,86,93,140,190,50,106,56,131,40,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(58,15,185,100,90,55,127,100,144,185,17,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752656015314'] = function(block) {
  let code = "base_action.action('Box_Leftturn90一个')\n";
  return code;
}

