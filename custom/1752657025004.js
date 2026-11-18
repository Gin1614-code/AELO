Blockly.Blocks['1752657025004'] = {
  init: function() {
    this.jsonInit({
      "type": "1752657025004",
      "message0": "Box_",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752657025004'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(50)\nMOTOmove19(65,20,147,99,44,55,86,93,140,176,50,106,56,131,40,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(63,22,147,100,91,55,129,100,140,173,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(58,28,185,100,90,55,127,100,139,174,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752657025004'] = function(block) {
  let code = "base_action.action('Box_')\n";
  return code;
}

