Blockly.Blocks['1752378635893'] = {
  init: function() {
    this.jsonInit({
      "type": "1752378635893",
      "message0": "前进直走改一半",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752378635893'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,90,55,127,100,137,173,43,100,110,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 抬左腿\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,96,118,74,131,92,137,173,43,97,110,145,73,89,0,0,100)\nMOTOwait()\n\n\n-- 左腿迈出\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,88,131,104,114,92,137,173,43,91,110,111,110,96,0,0,100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,104,90,56,126,108,137,173,43,109,82,128,60,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,94,118,66,130,103,137,173,43,97,99,136,81,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,100,107,66,130,103,137,173,43,101,110,125,91,99,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,108,119,74,124,89,137,173,43,114,109,145,73,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,95,87,54,125,107,137,173,43,99,83,114,80,103,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752378635893'] = function(block) {
  let code = "base_action.action('前进直走改一半')\n";
  return code;
}

