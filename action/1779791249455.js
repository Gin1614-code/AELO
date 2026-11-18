Blockly.Blocks['1779791249455'] = {
  init: function() {
    this.jsonInit({
      "type": "1779791249455",
      "message0": "front3step",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779791249455'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,100,91,55,129,100,140,170,30,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(5)\nMOTOmove19(55,29,175,90,91,48,134,88,140,170,30,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,86,126,65,144,86,140,170,30,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,88,115,31,160,86,140,170,30,93,104,131,87,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,107,98,56,129,111,140,170,30,114,134,148,94,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,106,93,54,128,113,140,170,30,111,90,139,57,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,106,91,54,128,111,140,170,30,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,88,69,45,112,90,140,170,30,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,86,91,105,79,88,140,170,30,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(55,29,175,86,126,65,144,86,140,170,30,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(55,29,175,88,115,31,160,86,140,170,30,93,104,131,87,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,107,98,56,129,111,140,170,30,111,129,148,96,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(55,29,175,106,93,54,128,113,140,170,30,111,90,139,57,114,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(55,29,175,100,91,55,129,100,140,170,30,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779791249455'] = function(block) {
  let code = "base_action.action('front3step')\n";
  return code;
}

