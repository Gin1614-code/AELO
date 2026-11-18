Blockly.Blocks['1779186538700'] = {
  init: function() {
    this.jsonInit({
      "type": "1779186538700",
      "message0": "bigright-1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779186538700'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,103,122,78,128,102,140,184,32,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,170,46,89,22,144,72,143,185,32,133,85,129,80,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,170,81,90,10,160,90,145,185,32,127,52,80,93,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(64,18,169,103,122,78,128,102,140,184,32,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1779186538700'] = function(block) {
  let code = "base_action.action('bigright-1')\n";
  return code;
}

