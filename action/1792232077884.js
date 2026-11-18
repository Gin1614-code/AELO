Blockly.Blocks['1792232077884'] = {
  init: function() {
    this.jsonInit({
      "type": "1792232077884",
      "message0": "bigleft177",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1792232077884'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(20)\nMOTOmove19(68,17,163,98,102,77,115,98,136,186,40,99,99,123,86,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,180,44,85,55,111,60,143,185,25,129,111,155,75,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,180,67,120,108,93,84,145,185,25,117,109,180,55,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,19,180,95,116,82,114,95,140,185,25,98,84,119,84,97,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1792232077884'] = function(block) {
  let code = "base_action.action('bigleft177')\n";
  return code;
}

