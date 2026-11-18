Blockly.Blocks['1752654825604'] = {
  init: function() {
    this.jsonInit({
      "type": "1752654825604",
      "message0": "left30改过手2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752654825604'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(24)\nMOTOmove19(74,19,161,95,72,55,102,95,137,173,43,105,87,145,56,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,72,55,102,93,137,173,43,105,87,145,56,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,93,55,124,100,137,173,43,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(20)\nMOTOmove19(74,19,185,100,90,55,127,100,137,173,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752654825604'] = function(block) {
  let code = "base_action.action('left30改过手2')\n";
  return code;
}

