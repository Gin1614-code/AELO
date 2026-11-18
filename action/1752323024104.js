Blockly.Blocks['1752323024104'] = {
  init: function() {
    this.jsonInit({
      "type": "1752323024104",
      "message0": "hyc直走2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752323024104'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,90,91,48,134,88,140,190,25,94,109,146,71,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,89,106,72,121,96,140,190,25,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,86,121,37,161,88,140,190,25,94,109,146,72,89,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,10,179,107,98,56,129,111,140,190,25,112,131,155,88,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,113,90,145,65,109,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,106,93,54,128,113,140,190,25,112,74,144,47,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,102,94,56,122,94,140,190,25,105,78,150,44,97,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,111,94,53,122,111,140,190,25,112,79,151,47,116,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,10,179,100,93,55,124,100,140,190,25,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752323024104'] = function(block) {
  let code = "base_action.action('hyc直走2')\n";
  return code;
}

