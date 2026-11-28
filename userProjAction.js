Blockly.Blocks['1795815915100'] = {
  init: function() {
    this.jsonInit({
      "type": "1795815915100",
      "message0": "one_rightturn30",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795815915100'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(64, 18, 161, 95, 106, 55, 143, 95, 140, 184, 43, 105, 142, 145, 103, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(64, 19, 161, 100, 93, 55, 124, 100, 140, 184, 43, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64, 19, 185, 100, 90, 55, 127, 100, 140, 184, 15, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795815915100'] = function(block) {
  let code = "base_action.action('one_rightturn30')\n";
  return code;
}

Blockly.Blocks['1795816183535'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816183535",
      "message0": "boxdown",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816183535'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(64, 54, 189, 100, 91, 55, 129, 100, 138, 151, 15, 100, 109, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816183535'] = function(block) {
  let code = "base_action.action('boxdown')\n";
  return code;
}

Blockly.Blocks['1795816187021'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816187021",
      "message0": "four_bigleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816187021'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 95, 117, 83, 114, 96, 110, 190, 40, 95, 84, 115, 84, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 44, 96, 61, 123, 60, 110, 190, 40, 126, 103, 142, 76, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 69, 143, 112, 109, 93, 110, 190, 40, 117, 109, 180, 55, 109, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 95, 117, 83, 114, 96, 110, 190, 40, 95, 84, 115, 84, 97, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n";
  return code;
}

Blockly.Python['1795816187021'] = function(block) {
  let code = "base_action.action('four_bigleft')\n";
  return code;
}

Blockly.Blocks['1795816190644'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816190644",
      "message0": "four_bigright",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816190644'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 103, 122, 78, 128, 102, 110, 190, 40, 104, 76, 119, 73, 103, 0, 0, 99)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 46, 89, 22, 148, 72, 110, 190, 40, 131, 61, 127, 64, 131, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 82, 85, 10, 159, 89, 110, 190, 40, 127, 52, 80, 93, 109, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 103, 122, 78, 128, 102, 110, 190, 40, 104, 76, 119, 73, 103, 0, 0, 99)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n";
  return code;
}

Blockly.Python['1795816190644'] = function(block) {
  let code = "base_action.action('four_bigright')\n";
  return code;
}

Blockly.Blocks['1795816194353'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816194353",
      "message0": "four_boxup",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816194353'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(93, 30, 100, 100, 93, 55, 124, 100, 110, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 56, 115, 65, 127, 150, 51, 78, 110, 141, 101, 142, 81, 50, 153, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 30, 171, 57, 142, 150, 48, 66, 110, 160, 32, 143, 60, 50, 151, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 49, 166, 47, 154, 142, 47, 62, 110, 160, 39, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 47, 154, 142, 47, 62, 110, 160, 31, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 47, 154, 142, 47, 62, 110, 190, 40, 156, 45, 57, 153, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 57, 140, 150, 69, 62, 110, 190, 40, 138, 85, 50, 152, 139, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 97, 107, 150, 59, 99, 110, 190, 40, 99, 96, 50, 144, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 98, 102, 77, 115, 98, 110, 190, 40, 99, 99, 123, 86, 98, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816194353'] = function(block) {
  let code = "base_action.action('four_boxup')\n";
  return code;
}

Blockly.Blocks['1795816197005'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816197005",
      "message0": "four_front1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816197005'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 90, 91, 48, 129, 88, 110, 190, 40, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 125, 95, 110, 90, 110, 190, 40, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816197005'] = function(block) {
  let code = "base_action.action('four_front1')\n";
  return code;
}

Blockly.Blocks['1795816200945'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816200945",
      "message0": "four_front2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816200945'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 90, 91, 48, 129, 88, 110, 190, 40, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 125, 95, 110, 90, 110, 190, 40, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 右腿抬腿\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 93, 54, 123, 111, 110, 190, 40, 114, 87, 167, 44, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 88, 71, 45, 107, 90, 110, 190, 40, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 86, 110, 95, 100, 90, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816200945'] = function(block) {
  let code = "base_action.action('four_front2')\n";
  return code;
}

Blockly.Blocks['1795816203608'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816203608",
      "message0": "four_front3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816203608'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 90, 91, 48, 129, 88, 110, 190, 40, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 125, 95, 110, 90, 110, 190, 40, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 93, 54, 123, 111, 110, 190, 40, 114, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 88, 71, 45, 107, 90, 110, 190, 40, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 86, 110, 95, 100, 90, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- 重心向左\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 停步2\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816203608'] = function(block) {
  let code = "base_action.action('four_front3')\n";
  return code;
}

Blockly.Blocks['1795816206135'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816206135",
      "message0": "four_front4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816206135'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(93, 10, 163, 90, 91, 48, 129, 88, 110, 190, 40, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 125, 95, 110, 90, 110, 190, 40, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 93, 54, 123, 111, 110, 190, 40, 114, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 88, 71, 45, 107, 90, 110, 190, 40, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 86, 110, 95, 100, 90, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 86, 113, 37, 156, 88, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 107, 100, 56, 124, 111, 110, 190, 40, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(45)\nMOTOmove19(93, 10, 163, 106, 95, 54, 123, 113, 110, 190, 40, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 106, 93, 54, 123, 111, 110, 190, 40, 113, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 88, 71, 45, 107, 90, 110, 190, 40, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(93, 10, 163, 86, 110, 95, 100, 90, 110, 190, 40, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816206135'] = function(block) {
  let code = "base_action.action('four_front4')\n";
  return code;
}

Blockly.Blocks['1795816208632'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816208632",
      "message0": "four_leftturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816208632'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 96, 97, 55, 130, 96, 110, 190, 40, 101, 117, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 96, 97, 55, 130, 103, 110, 190, 40, 101, 117, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 88, 55, 124, 100, 110, 190, 40, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816208632'] = function(block) {
  let code = "base_action.action('four_leftturn10')\n";
  return code;
}

Blockly.Blocks['1795816211198'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816211198",
      "message0": "four_leftturn30",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816211198'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(93, 10, 163, 95, 67, 55, 102, 95, 110, 190, 40, 105, 85, 145, 56, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 100, 90, 55, 127, 100, 110, 190, 40, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816211198'] = function(block) {
  let code = "base_action.action('four_leftturn30')\n";
  return code;
}

Blockly.Blocks['1795816213692'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816213692",
      "message0": "four_rightturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816213692'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 99, 83, 55, 118, 97, 110, 190, 40, 104, 103, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 99, 83, 55, 118, 93, 110, 190, 40, 104, 103, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 93, 65, 119, 96, 110, 190, 40, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 88, 55, 124, 100, 110, 190, 40, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816213692'] = function(block) {
  let code = "base_action.action('four_rightturn10')\n";
  return code;
}

Blockly.Blocks['1795816218117'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816218117",
      "message0": "four_rightturn30",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816218117'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(93, 10, 163, 95, 106, 55, 143, 95, 110, 190, 40, 105, 142, 145, 103, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(93, 10, 163, 100, 93, 55, 124, 100, 110, 190, 40, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(93, 10, 163, 100, 90, 55, 127, 100, 110, 190, 40, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816218117'] = function(block) {
  let code = "base_action.action('four_rightturn30')\n";
  return code;
}

Blockly.Blocks['1795816224146'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816224146",
      "message0": "four_smallright",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816224146'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 82, 88, 53, 124, 99, 110, 190, 40, 110, 111, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(93, 10, 163, 82, 88, 53, 124, 99, 110, 190, 40, 99, 111, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(17)\nMOTOmove19(93, 10, 163, 94, 88, 54, 124, 85, 110, 190, 40, 105, 111, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816224146'] = function(block) {
  let code = "base_action.action('four_smallright')\n";
  return code;
}

Blockly.Blocks['1795816221717'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816221717",
      "message0": "four_smallleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816221717'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 102, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 95, 86, 53, 123, 89, 110, 190, 40, 121, 110, 145, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 95, 86, 53, 123, 99, 110, 190, 40, 108, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(93, 10, 163, 95, 89, 54, 124, 105, 110, 190, 40, 106, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(93, 10, 163, 100, 89, 55, 124, 100, 110, 190, 40, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816221717'] = function(block) {
  let code = "base_action.action('four_smallleft')\n";
  return code;
}

Blockly.Blocks['1795816244000'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816244000",
      "message0": "one_front1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816244000'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 88, 136, 184, 32, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 125, 95, 110, 90, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816244000'] = function(block) {
  let code = "base_action.action('one_front1')\n";
  return code;
}

Blockly.Blocks['1795816247851'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816247851",
      "message0": "one_front2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816247851'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 88, 136, 184, 32, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 125, 95, 110, 90, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 右腿抬腿\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 93, 54, 123, 111, 136, 184, 32, 114, 87, 167, 44, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 88, 71, 45, 107, 90, 136, 184, 32, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 86, 110, 95, 100, 90, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816247851'] = function(block) {
  let code = "base_action.action('one_front2')\n";
  return code;
}

Blockly.Blocks['1795816251071'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816251071",
      "message0": "one_front3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816251071'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 88, 136, 184, 32, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 125, 95, 110, 90, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 93, 54, 123, 111, 136, 184, 32, 114, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 88, 71, 45, 107, 90, 136, 184, 32, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 86, 110, 95, 100, 90, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\n\n\n-- 重心向左\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 停步2\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816251071'] = function(block) {
  let code = "base_action.action('one_front3')\n";
  return code;
}

Blockly.Blocks['1795816259660'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816259660",
      "message0": "one_front4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816259660'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(68, 18, 169, 90, 91, 48, 129, 88, 136, 184, 32, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 125, 95, 110, 90, 136, 184, 32, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 95, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- ad2\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 93, 54, 123, 111, 136, 184, 32, 114, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 88, 71, 45, 107, 90, 136, 184, 32, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 86, 110, 95, 100, 90, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 86, 113, 37, 156, 88, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 107, 100, 56, 124, 111, 136, 184, 32, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 抬右腿\nMOTOsetspeed(45)\nMOTOmove19(68, 18, 169, 106, 95, 54, 123, 113, 136, 184, 32, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(68, 18, 169, 106, 93, 54, 123, 111, 136, 184, 32, 113, 66, 143, 49, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 88, 71, 45, 107, 90, 136, 184, 32, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(68, 18, 169, 86, 110, 95, 100, 90, 136, 184, 32, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(68, 18, 169, 100, 93, 55, 124, 100, 136, 184, 32, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816259660'] = function(block) {
  let code = "base_action.action('one_front4')\n";
  return code;
}

Blockly.Blocks['1795816263317'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816263317",
      "message0": "one_leftturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816263317'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(64, 19, 185, 96, 97, 55, 130, 96, 140, 184, 15, 101, 117, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 96, 97, 55, 130, 103, 140, 184, 15, 101, 117, 145, 82, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 100, 88, 55, 124, 100, 140, 184, 15, 100, 107, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 100, 93, 55, 124, 100, 140, 184, 15, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816263317'] = function(block) {
  let code = "base_action.action('one_leftturn10')\n";
  return code;
}

Blockly.Blocks['1795816267035'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816267035",
      "message0": "one_leftturn30",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816267035'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(64, 18, 161, 95, 67, 55, 102, 95, 140, 184, 43, 105, 85, 145, 56, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(64, 19, 161, 100, 93, 55, 124, 100, 140, 184, 43, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(64, 19, 185, 100, 90, 55, 127, 100, 140, 184, 15, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816267035'] = function(block) {
  let code = "base_action.action('one_leftturn30')\n";
  return code;
}

Blockly.Blocks['1795816270078'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816270078",
      "message0": "one_rightturn10",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816270078'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(64, 19, 185, 99, 83, 55, 118, 97, 140, 184, 15, 104, 103, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 99, 83, 55, 118, 93, 140, 184, 15, 104, 103, 145, 70, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 100, 93, 65, 119, 96, 140, 184, 15, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(64, 19, 185, 100, 88, 55, 124, 100, 140, 184, 15, 100, 112, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816270078'] = function(block) {
  let code = "base_action.action('one_rightturn10')\n";
  return code;
}

Blockly.Blocks['1795816279294'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816279294",
      "message0": "one_smallleft",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816279294'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 102, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 95, 86, 53, 123, 89, 140, 184, 25, 121, 110, 145, 75, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(64, 18, 180, 95, 86, 53, 123, 99, 140, 184, 25, 108, 110, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(25)\nMOTOmove19(64, 18, 180, 95, 89, 54, 124, 105, 140, 184, 25, 106, 110, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816279294'] = function(block) {
  let code = "base_action.action('one_smallleft')\n";
  return code;
}

Blockly.Blocks['1795816281984'] = {
  init: function() {
    this.jsonInit({
      "type": "1795816281984",
      "message0": "one_smallright",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1795816281984'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(64, 18, 180, 82, 88, 53, 124, 99, 140, 184, 25, 110, 111, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(17)\nMOTOmove19(64, 18, 180, 82, 88, 53, 124, 99, 140, 184, 25, 99, 111, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(17)\nMOTOmove19(64, 18, 180, 94, 88, 54, 124, 85, 140, 184, 25, 105, 111, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(18)\nMOTOmove19(64, 18, 180, 100, 89, 55, 124, 100, 140, 184, 25, 100, 110, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1795816281984'] = function(block) {
  let code = "base_action.action('one_smallright')\n";
  return code;
}

