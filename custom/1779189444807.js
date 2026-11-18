Blockly.Blocks['1779189444807'] = {
  init: function() {
    this.jsonInit({
      "type": "1779189444807",
      "message0": "bigright_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779189444807'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,103,122,78,128,102,140,170,30,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(55,29,175,46,89,22,144,72,140,170,30,133,85,129,80,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(55,29,175,81,90,10,160,90,140,170,30,127,52,80,93,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,103,122,78,128,102,140,170,30,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1779189444807'] = function(block) {
  let code = "base_action.action('bigright_2')\n";
  return code;
}

