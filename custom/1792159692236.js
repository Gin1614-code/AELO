Blockly.Blocks['1792159692236'] = {
  init: function() {
    this.jsonInit({
      "type": "1792159692236",
      "message0": "bigleft16_4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1792159692236'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(10)\nMOTOmove19(65,19,180,95,116,82,114,95,140,185,25,98,84,119,84,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,180,44,96,61,123,60,143,185,25,129,111,155,75,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,180,69,115,109,81,84,145,185,25,117,109,180,55,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(20)\nMOTOmove19(65,19,180,95,116,82,114,95,140,185,25,98,84,119,84,97,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1792159692236'] = function(block) {
  let code = "base_action.action('bigleft16_4')\n";
  return code;
}

