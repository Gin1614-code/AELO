Blockly.Blocks['1752655512024'] = {
  init: function() {
    this.jsonInit({
      "type": "1752655512024",
      "message0": "九点五十两个",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752655512024'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,102,90,55,127,100,137,173,43,104,110,145,73,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,98,64,42,131,94,137,173,43,102,130,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,95,100,72,127,95,137,173,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,95,100,72,127,95,137,173,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,95,100,72,127,95,137,173,43,99,118,130,88,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起3\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,103,155,149,98,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,102,90,55,127,100,137,173,43,104,110,145,73,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(74,19,185,100,90,55,127,100,137,173,15,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752655512024'] = function(block) {
  let code = "base_action.action('九点五十两个')\n";
  return code;
}

