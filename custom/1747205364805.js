Blockly.Blocks['1747205364805'] = {
  init: function() {
    this.jsonInit({
      "type": "1747205364805",
      "message0": "LowBoxForward2s",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1747205364805'] = function(block) {
  let code = "MOTOrigid16(25,25,10,55,65,90,80,50,25,25,10,55,65,90,80,50)\nMOTOsetspeed(15)\nMOTOmove19(60,15,190,99,83,54,122,90,132,187,10,98,117,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(60,15,190,99,105,99,103,100,132,187,10,101,119,134,89,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,100,74,121,100,132,187,10,101,124,137,89,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,100,61,126,104,132,187,10,101,110,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(60,15,190,99,81,66,111,102,132,187,10,101,95,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,76,63,111,100,132,187,10,101,100,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60,15,190,99,90,73,106,100,132,187,10,101,100,139,74,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(23)\nMOTOmove19(60,15,190,96,85,70,110,100,132,187,10,102,119,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(60,15,190,100,93,55,124,100,132,187,10,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1747205364805'] = function(block) {
  let code = "base_action.action('LowBoxForward2s')\n";
  return code;
}

