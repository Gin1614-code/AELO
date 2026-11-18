Blockly.Blocks['1792226862868'] = {
  init: function() {
    this.jsonInit({
      "type": "1792226862868",
      "message0": "boxup17",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1792226862868'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,56,115,65,127,150,51,78,118,141,101,142,81,50,153,122,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,149,57,142,150,48,66,119,126,32,143,60,50,151,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,49,166,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,47,154,142,47,62,136,186,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,57,140,150,69,62,136,186,40,138,85,50,152,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,97,107,150,59,99,136,186,40,99,96,50,144,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,17,163,98,102,77,115,98,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1792226862868'] = function(block) {
  let code = "base_action.action('boxup17')\n";
  return code;
}

