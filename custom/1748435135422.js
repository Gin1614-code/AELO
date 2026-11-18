Blockly.Blocks['1748435135422'] = {
  init: function() {
    this.jsonInit({
      "type": "1748435135422",
      "message0": "LiftCubeZ27",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1748435135422'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,29,136,98,117,149,39,98,119,170,66,98,81,50,161,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,148,99,151,150,60,101,132,189,52,100,44,50,136,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,104,132,70,100,134,186,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,149,100,90,55,127,100,136,184,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1748435135422'] = function(block) {
  let code = "base_action.action('LiftCubeZ27')\n";
  return code;
}

