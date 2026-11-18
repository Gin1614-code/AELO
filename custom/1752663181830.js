Blockly.Blocks['1752663181830'] = {
  init: function() {
    this.jsonInit({
      "type": "1752663181830",
      "message0": "LiftCubeUp一个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752663181830'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(82,16,161,100,90,55,127,100,132,177,44,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,30,149,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,29,136,98,117,149,39,98,119,170,66,98,81,50,161,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(66,10,154,99,151,150,60,101,137,190,47,100,44,50,136,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(66,10,154,100,104,132,70,100,136,189,46,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(66,10,154,100,90,55,127,100,136,188,45,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(63,10,185,100,90,55,127,100,148,180,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752663181830'] = function(block) {
  let code = "base_action.action('LiftCubeUp一个')\n";
  return code;
}

