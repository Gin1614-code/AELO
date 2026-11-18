Blockly.Blocks['1784132948464'] = {
  init: function() {
    this.jsonInit({
      "type": "1784132948464",
      "message0": "gx_bigright_2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1784132948464'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,103,122,78,128,102,140,170,30,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,46,89,22,144,72,140,170,30,133,85,129,80,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,81,90,10,160,90,140,170,30,127,52,80,93,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,103,122,78,128,102,140,170,30,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,100,93,55,124,100,140,170,30,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1784132948464'] = function(block) {
  let code = "base_action.action('gx_bigright_2')\n";
  return code;
}

