Blockly.Blocks['1747294385676'] = {
  init: function() {
    this.jsonInit({
      "type": "1747294385676",
      "message0": "turn003R1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747294385676'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(80,30,120,99,82,55,116,97,120,170,120,104,94,145,69,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,115,99,89,55,117,93,120,170,115,104,98,145,70,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,98,65,119,96,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747294385676'] = function(block) {
  let code = "base_action.action('turn003R1')\n";
  return code;
}

