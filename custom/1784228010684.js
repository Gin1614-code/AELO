Blockly.Blocks['1784228010684'] = {
  init: function() {
    this.jsonInit({
      "type": "1784228010684",
      "message0": "x_bigleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784228010684'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(10)\nMOTOmove19(68,19,180,95,116,82,114,95,136,185,25,98,84,119,84,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,16,180,44,96,61,123,60,136,185,25,129,111,155,75,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68,16,180,69,143,112,109,93,136,185,25,117,109,180,55,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(68,19,180,95,116,82,114,95,136,185,25,98,84,119,84,97,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1784228010684'] = function(block) {
  let code = "base_action.action('x_bigleft')\n";
  return code;
}

