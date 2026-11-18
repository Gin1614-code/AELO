Blockly.Blocks['1792222822809'] = {
  init: function() {
    this.jsonInit({
      "type": "1792222822809",
      "message0": "boxup17",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1792222822809'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,56,115,63,114,148,53,80,118,141,101,145,93,68,148,122,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,149,57,142,150,48,66,119,126,32,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,49,166,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(46,26,156,47,154,142,47,62,149,184,42,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,50,103,137,52,60,136,186,40,141,84,54,150,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,97,131,150,59,99,136,186,40,99,69,50,144,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,17,163,98,102,77,115,98,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1792222822809'] = function(block) {
  let code = "base_action.action('boxup17')\n";
  return code;
}

