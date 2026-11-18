Blockly.Blocks['1752591935146'] = {
  init: function() {
    this.jsonInit({
      "type": "1752591935146",
      "message0": "rightmovefyt3改过手",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752591935146'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,78,120,64,135,93,137,173,43,124,78,122,75,119,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,97,93,54,129,95,137,173,43,100,107,146,71,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,93,55,129,95,137,173,43,100,107,146,71,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752591935146'] = function(block) {
  let code = "base_action.action('rightmovefyt3改过手')\n";
  return code;
}

