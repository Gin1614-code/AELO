Blockly.Blocks['1752314084337'] = {
  init: function() {
    this.jsonInit({
      "type": "1752314084337",
      "message0": "Box_Leftturn90",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752314084337'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,10,149,99,31,55,86,93,140,190,50,106,88,131,40,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752314084337'] = function(block) {
  let code = "base_action.action('Box_Leftturn90')\n";
  return code;
}

