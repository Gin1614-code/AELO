Blockly.Blocks['Press_left_leg'] = {
  init: function () {
    this.jsonInit({
      type: 'Press_left_leg',
      message0: '%{BKY_PRESS_LEFT_LEG}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Press_left_leg'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(24)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 63, 190, 114, 89, 122, 79, 71, 124, 113)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 59, 190, 114, 89, 122, 79, 60, 148, 108)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 63, 190, 114, 89, 122, 79, 71, 124, 113)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 59, 190, 114, 89, 122, 79, 60, 148, 108)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 63, 190, 114, 89, 122, 79, 71, 124, 113)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 59, 190, 114, 89, 122, 79, 60, 148, 108)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 63, 190, 114, 89, 122, 79, 71, 124, 113)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 59, 190, 114, 89, 122, 79, 60, 148, 108)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(81, 44, 104, 80, 100, 45, 125, 63, 190, 114, 89, 122, 79, 71, 124, 113)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 108, 93, 55, 124, 100, 120, 170, 100, 92, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(250)',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Press_left_leg'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['PRESS_LEFT_LEG'] + "')\n";
  return code;
}

