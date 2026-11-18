Blockly.Blocks['1784132080855'] = {
  init: function() {
    this.jsonInit({
      "type": "1784132080855",
      "message0": "gx_bigleft_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784132080855'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,95,117,83,114,96,140,170,30,95,84,115,84,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,44,96,61,123,60,140,170,30,126,103,142,76,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,69,143,112,109,93,140,170,30,117,109,180,55,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,95,117,83,114,96,140,170,30,95,84,115,84,97,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,100,93,55,124,100,140,170,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1784132080855'] = function(block) {
  let code = "base_action.action('gx_bigleft_2')\n";
  return code;
}

