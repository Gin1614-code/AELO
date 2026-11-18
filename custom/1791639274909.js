Blockly.Blocks['1791639274909'] = {
  init: function() {
    this.jsonInit({
      "type": "1791639274909",
      "message0": "bigright_10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1791639274909'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(10)\nMOTOmove19(64,18,180,103,122,78,128,102,140,184,25,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,16,180,46,89,22,148,72,143,185,25,131,61,127,64,131,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(60,16,180,82,85,10,159,89,145,185,25,127,52,80,93,109,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(64,18,180,103,122,78,128,102,140,184,25,104,76,119,73,103,0,0,99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n";
  return code;
}

Blockly.Python['1791639274909'] = function(block) {
  let code = "base_action.action('bigright_10')\n";
  return code;
}

