Blockly.Blocks['1752923196178'] = {
  init: function() {
    this.jsonInit({
      "type": "1752923196178",
      "message0": "BoxTurnR1两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752923196178'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(40)\nMOTOmove19(74,19,185,96,97,55,130,96,137,173,15,101,117,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,96,97,55,130,103,137,173,15,101,117,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,88,55,124,100,137,173,15,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,55,124,100,137,173,15,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752923196178'] = function(block) {
  let code = "base_action.action('BoxTurnR1两个')\n";
  return code;
}

