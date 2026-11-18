Blockly.Blocks['1752742376951'] = {
  init: function() {
    this.jsonInit({
      "type": "1752742376951",
      "message0": "放下物块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1752742376951'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(64,54,189,100,91,55,129,100,138,151,15,100,109,145,71,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1752742376951'] = function(block) {
  let code = "base_action.action('放下物块')\n";
  return code;
}

