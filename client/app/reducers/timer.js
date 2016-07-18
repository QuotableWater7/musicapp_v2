'use strict';

import { Map } from 'immutable';

const default_state = Map({
  time_elapsed: 0,
  isOn: false
});

export default (state = default_state, action) => {
  switch(action.type) {
  case 'START_TIMER':
    return state.merge({ isOn: true });
  case 'STOP_TIMER':
    return state.merge({ isOn: false });
  case 'RESET_TIMER':
    return state.merge(default_state);
  case 'TICK':
    return state.merge({
      time_elapsed: state.get('time_elapsed') + action.amount
    });
  }

  return state;
};
