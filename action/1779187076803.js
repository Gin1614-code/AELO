Blockly.Blocks['1779187076803'] = {
  init: function() {
    this.jsonInit({
      "type": "1779187076803",
      "message0": "leftturn10-2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1779187076803'] = function(block) {
  let code = "MOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(74,19,185,96,97,55,130,96,137,173,15,101,117,145,82,103,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(74,19,185,96,97,55,130,103,137,173,15,101,117,145,82,107,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(74,19,185,100,88,55,124,100,137,173,15,100,107,135,81,104,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(74,19,185,100,93,55,124,100,137,173,15,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1779187076803'] = function(block) {
  let code = "base_action.action('leftturn10-2')\n";
  return code;
}

