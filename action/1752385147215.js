Blockly.Blocks['1752385147215'] = {
  init: function() {
    this.jsonInit({
      "type": "1752385147215",
      "message0": "前进直走调不出来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752385147215'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,90,55,127,100,137,173,43,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 抬左腿\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,96,118,74,131,92,137,173,43,97,110,145,73,89,0,0,100)\nMOTOwait()\n\n\n-- 迈出左腿4\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,98,114,61,144,99,137,173,43,99,106,121,95,95,0,0,100)\nMOTOwait()\n\n\n-- 抬起右腿3\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,114,75,129,108,137,173,43,99,106,102,106,100,0,0,100)\nMOTOwait()\n\n\n-- 右腿伸出\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,111,101,81,112,111,137,173,43,111,74,100,81,110,0,0,100)\nMOTOwait()\n\n\n-- 迈出右腿\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,109,79,116,103,136,173,43,100,80,146,47,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752385147215'] = function(block) {
  let code = "base_action.action('前进直走调不出来')\n";
  return code;
}

