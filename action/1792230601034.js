Blockly.Blocks['1792230601034'] = {
  init: function() {
    this.jsonInit({
      "type": "1792230601034",
      "message0": "boxup17_3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1792230601034'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,56,115,69,101,136,50,76,118,141,101,140,65,50,135,125,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(88,73,149,67,129,150,55,65,119,126,32,148,68,62,134,140,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,49,166,47,154,142,47,62,120,160,39,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,47,154,142,47,62,136,186,40,156,45,57,153,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,62,101,133,57,60,136,186,40,142,66,55,125,139,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68,17,163,97,124,150,59,99,136,186,40,99,80,50,144,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68,17,163,98,102,77,115,98,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1792230601034'] = function(block) {
  let code = "base_action.action('boxup17_3')\n";
  return code;
}

