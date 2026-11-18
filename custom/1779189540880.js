Blockly.Blocks['1779189540880'] = {
  init: function() {
    this.jsonInit({
      "type": "1779189540880",
      "message0": "front1step_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779189540880'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,100,91,55,129,100,140,184,32,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(5)\nMOTOmove19(64,18,169,90,91,48,134,88,140,184,32,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,86,126,65,144,86,140,184,32,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,88,115,31,160,86,140,184,32,93,104,131,87,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64,18,169,107,98,56,129,111,140,184,32,114,134,148,94,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,106,93,54,128,113,140,184,32,111,90,139,57,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(64,18,169,100,91,55,129,100,140,184,32,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779189540880'] = function(block) {
  let code = "base_action.action('front1step_1')\n";
  return code;
}

