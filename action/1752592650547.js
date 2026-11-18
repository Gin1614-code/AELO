Blockly.Blocks['1752592650547'] = {
  init: function() {
    this.jsonInit({
      "type": "1752592650547",
      "message0": "right30改过手",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752592650547'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(74,19,161,95,113,55,143,95,137,173,43,105,123,145,103,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,112,55,142,93,137,173,43,105,122,145,102,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,93,55,124,100,137,173,43,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1752592650547'] = function(block) {
  let code = "base_action.action('right30改过手')\n";
  return code;
}

