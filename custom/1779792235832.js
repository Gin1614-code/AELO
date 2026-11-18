Blockly.Blocks['1779792235832'] = {
  init: function() {
    this.jsonInit({
      "type": "1779792235832",
      "message0": "bigleft1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779792235832'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(10)\nMOTOmove19(65,19,180,95,117,83,114,96,140,185,25,95,84,115,84,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,180,44,96,61,123,60,143,185,25,126,103,142,76,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,180,69,143,112,109,93,145,185,25,117,109,180,55,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,19,180,95,117,83,114,96,140,185,25,95,84,115,84,97,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1779792235832'] = function(block) {
  let code = "base_action.action('bigleft1')\n";
  return code;
}

