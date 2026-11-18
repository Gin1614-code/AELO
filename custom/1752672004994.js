Blockly.Blocks['1752672004994'] = {
  init: function() {
    this.jsonInit({
      "type": "1752672004994",
      "message0": "ForwardLong1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752672004994'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\n\n\n-- 重心转右\nMOTOsetspeed(10)\nMOTOmove19(64,21,189,90,91,48,134,88,139,180,16,94,109,146,71,89,0,0,100)\nMOTOwait()\n\n\n-- L1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,123,95,115,90,139,180,16,94,109,146,71,87,0,0,100)\nMOTOwait()\n\n\n-- L2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,121,37,161,88,139,180,16,94,109,146,72,89,0,0,100)\nMOTOwait()\n\n\n-- 踏左\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,107,98,56,129,111,139,180,16,112,131,155,88,110,0,0,100)\nMOTOwait()\n\n\n-- R1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,93,54,128,113,139,180,16,114,77,105,85,110,0,0,100)\nMOTOwait()\n\n\n-- R2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,91,54,128,111,139,180,16,114,89,163,39,112,0,0,100)\nMOTOwait()\n\n\n-- 踏右\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,88,69,45,112,90,139,180,16,93,102,144,71,89,0,0,100)\nMOTOwait()\n\n\n-- L1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,123,95,115,90,139,180,16,94,107,146,72,87,0,0,100)\nMOTOwait()\n\n\n-- L2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,121,37,161,88,139,180,16,94,109,146,72,89,0,0,100)\nMOTOwait()\n\n\n-- 踏左\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,107,98,56,129,111,139,180,16,112,131,155,88,110,0,0,100)\nMOTOwait()\n\n\n-- R1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,93,54,128,113,139,180,16,114,77,105,85,110,0,0,100)\nMOTOwait()\n\n\n-- R2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,91,54,128,111,139,180,16,114,89,163,39,112,0,0,100)\nMOTOwait()\n\n\n-- 踏右\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,88,69,45,112,90,139,180,16,93,102,144,71,89,0,0,100)\nMOTOwait()\n\n\n-- L1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,123,95,115,90,139,180,16,94,107,146,72,87,0,0,100)\nMOTOwait()\n\n\n-- L2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,121,37,161,88,139,180,16,94,109,146,72,89,0,0,100)\nMOTOwait()\n\n\n-- 踏左\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,107,98,56,129,111,139,180,16,112,131,155,88,110,0,0,100)\nMOTOwait()\n\n\n-- R1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,93,54,128,113,139,180,16,114,77,105,85,110,0,0,100)\nMOTOwait()\n\n\n-- R2\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,106,91,54,128,111,139,180,16,114,89,163,39,112,0,0,100)\nMOTOwait()\n\n\n-- 踏右\nMOTOsetspeed(20)\nMOTOmove19(64,21,189,88,69,45,112,90,139,180,16,93,102,144,71,89,0,0,100)\nMOTOwait()\n\n\n-- L1\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,86,123,95,115,90,139,180,16,94,107,146,72,87,0,0,100)\nMOTOwait()\n\n\n-- L1后立正\nMOTOsetspeed(30)\nMOTOmove19(64,21,189,100,91,55,129,100,139,180,16,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752672004994'] = function(block) {
  let code = "base_action.action('ForwardLong1')\n";
  return code;
}

