Blockly.Blocks['Left_side_move'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_side_move',
      message0: '%{BKY_LEFT_SIDE_MOVE}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_side_move'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,30,30,60,30,60,25,25,25,60,60,60,60,60)',
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 90, 93, 55, 124, 95, 120, 170, 100, 100, 107, 145, 76, 105)',
    'MOTOwait()',
    'MOTOsetspeed(40)',
    'MOTOmove16(10, 87, 100, 92, 93, 55, 124, 94, 105, 20, 100, 108, 107, 145, 76, 106)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(40)',
    'MOTOmove16(10, 87, 100, 77, 120, 105, 94, 94, 105, 20, 100, 93, 107, 145, 76, 117)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(47)',
    'MOTOmove16(10, 87, 100, 92, 93, 55, 124, 92, 105, 20, 100, 108, 107, 145, 76, 108)',
    'MOTOwait()',
    'DelayMs(200)',
    'MOTOsetspeed(40)',
    'MOTOmove16(10, 87, 100, 77, 120, 105, 94, 94, 65, 40, 100, 93, 107, 145, 76, 116)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(47)',
    'MOTOmove16(10, 87, 100, 92, 93, 55, 124, 92, 65, 40, 100, 108, 107, 145, 76, 108)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 95, 120, 170, 100, 92, 107, 145, 76, 105)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_side_move'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_SIDE_MOVE'] + "')\n";
  return code;
}

