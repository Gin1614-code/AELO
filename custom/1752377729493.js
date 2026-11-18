Blockly.Blocks['1752377729493'] = {
  init: function() {
    this.jsonInit({
      "type": "1752377729493",
      "message0": "前走不稳",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752377729493'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,90,55,127,100,137,173,43,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,108,139,95,126,98,137,173,43,114,55,81,96,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,108,119,74,124,89,137,173,43,114,109,145,73,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,105,139,96,126,99,137,173,43,104,93,86,121,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,94,140,112,104,106,137,173,43,96,113,114,120,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,87,54,125,107,137,173,43,99,83,114,80,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,89,107,73,100,137,173,43,98,78,89,94,101,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752377729493'] = function(block) {
  let code = "base_action.action('前走不稳')\n";
  return code;
}

