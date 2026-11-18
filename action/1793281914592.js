Blockly.Blocks['1793281914592'] = {
  init: function() {
    this.jsonInit({
      "type": "1793281914592",
      "message0": "front2_quick",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1793281914592'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(40)\nMOTOmove19(68,18,169,100,93,55,124,100,136,184,32,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68,18,169,90,91,48,129,88,136,184,32,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,18,169,86,125,95,110,90,136,184,32,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,18,169,86,113,37,156,88,136,184,32,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,18,169,107,100,56,124,111,136,184,32,112,129,155,93,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,18,169,106,95,54,123,113,136,184,32,114,75,105,90,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,18,169,106,93,54,123,111,136,184,32,114,87,163,44,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,18,169,88,71,45,107,90,136,184,32,93,100,144,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(68,18,169,86,110,95,100,90,136,184,32,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68,18,169,100,93,55,124,100,136,184,32,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1793281914592'] = function(block) {
  let code = "base_action.action('front2_quick')\n";
  return code;
}

