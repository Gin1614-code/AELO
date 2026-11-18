Blockly.Blocks['1752509906096'] = {
  init: function() {
    this.jsonInit({
      "type": "1752509906096",
      "message0": "十二点半",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752509906096'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,102,90,55,127,100,137,173,43,104,110,145,73,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,98,64,42,131,94,137,173,43,102,130,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,100,72,129,95,137,173,43,99,130,142,83,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,104,139,127,105,103,0,0,100)\nMOTOwait()\nDelayMs(10)\n\n\n-- 伸出2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,100,72,129,95,137,173,43,99,130,142,83,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,104,139,127,105,103,0,0,100)\nMOTOwait()\nDelayMs(10)\n\n\n-- 伸出2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,100,72,129,95,137,173,43,99,130,142,83,90,0,0,100)\nMOTOwait()\n\n\n-- 抬起2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,104,139,127,105,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,93,65,80,87,97,137,173,43,97,127,142,83,90,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752509906096'] = function(block) {
  let code = "base_action.action('十二点半')\n";
  return code;
}

