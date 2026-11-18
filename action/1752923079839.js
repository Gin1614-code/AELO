Blockly.Blocks['1752923079839'] = {
  init: function() {
    this.jsonInit({
      "type": "1752923079839",
      "message0": "BoxRightTurn1s两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752923079839'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(74,19,185,95,123,55,154,95,137,173,15,105,137,145,106,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,95,123,55,154,93,137,173,15,105,137,145,106,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,185,100,93,55,124,100,137,173,15,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1752923079839'] = function(block) {
  let code = "base_action.action('BoxRightTurn1s两个')\n";
  return code;
}

