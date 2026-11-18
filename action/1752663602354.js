Blockly.Blocks['1752663602354'] = {
  init: function() {
    this.jsonInit({
      "type": "1752663602354",
      "message0": "九点五十一个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752663602354'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(63,10,159,102,90,55,127,100,140,190,43,104,110,145,73,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(63,10,161,98,64,42,131,94,140,190,43,102,130,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,95,100,72,127,95,140,190,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,93,65,80,87,97,140,190,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,95,100,72,127,95,140,190,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,93,65,80,87,97,140,190,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,95,100,72,127,95,140,190,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,101,78,65,113,110,140,190,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(63,10,161,93,65,80,87,97,140,190,43,97,127,142,83,90,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(63,10,161,102,90,55,127,100,140,190,43,104,110,145,73,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(63,10,185,100,90,55,127,100,140,190,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752663602354'] = function(block) {
  let code = "base_action.action('九点五十一个')\n";
  return code;
}

