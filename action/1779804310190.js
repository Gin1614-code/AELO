Blockly.Blocks['1779804310190'] = {
  init: function() {
    this.jsonInit({
      "type": "1779804310190",
      "message0": "boxup_1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779804310190'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(10)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(79,43,148,100,136,150,62,100,119,158,49,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93,30,136,99,118,150,41,99,113,169,66,99,81,50,160,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,16,136,98,120,149,39,98,130,190,65,98,78,50,161,98,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(5)\nMOTOmove19(64,10,150,98,117,149,39,98,138,189,52,98,81,50,161,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(55,19,146,99,118,136,60,99,149,179,55,102,80,59,142,99,0,0,100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(5)\nMOTOmove19(61,15,159,100,104,132,70,100,135,189,44,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60,13,159,100,90,55,127,100,135,190,44,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(58,16,184,100,90,55,127,100,136,188,18,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779804310190'] = function(block) {
  let code = "base_action.action('boxup_1')\n";
  return code;
}

