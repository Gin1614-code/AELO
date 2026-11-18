Blockly.Blocks['1752507990126'] = {
  init: function() {
    this.jsonInit({
      "type": "1752507990126",
      "message0": "直走还是再调",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752507990126'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 站立\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,102,90,55,127,100,137,173,43,104,110,145,73,101,0,0,100)\nMOTOwait()\n\n\n-- 降低重心\nMOTOsetspeed(70)\nMOTOmove19(74,19,161,98,71,56,117,99,137,173,43,102,130,142,83,97,0,0,100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,90,70,60,115,91,137,173,43,94,129,141,83,92,0,0,100)\nMOTOwait()\n\n\n-- 抬起左腿\nMOTOsetspeed(50)\nMOTOmove19(74,19,161,97,94,73,125,96,137,173,43,99,130,142,83,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,103,68,136,103,137,173,43,103,127,133,93,103,0,0,100)\nMOTOwait()\n\n\n-- 抬起2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,104,139,127,105,103,0,0,100)\nMOTOwait()\n\n\n-- 伸出2\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,101,78,65,113,110,137,173,43,102,81,132,49,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,94,59,54,104,99,137,173,43,94,120,140,79,98,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,93,63,66,99,95,137,173,43,93,127,142,83,92,0,0,100)\nMOTOwait()\n\n\n-- 抬起左腿\nMOTOsetspeed(30)\nMOTOmove19(74,19,161,97,94,73,125,96,137,173,43,99,130,142,83,92,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752507990126'] = function(block) {
  let code = "base_action.action('直走还是再调')\n";
  return code;
}

