Blockly.Blocks['1747465546397'] = {
  init: function() {
    this.jsonInit({
      "type": "1747465546397",
      "message0": "11110",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747465546397'] = function(block) {
  let code = "MOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,63,55,94,95,132,187,10,105,77,145,46,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,95,63,55,94,93,132,187,10,105,77,145,46,107,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1747465546397'] = function(block) {
  let code = "base_action.action('11110')\n";
  return code;
}

