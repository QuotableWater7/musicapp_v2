'use strict';

import { Map } from 'immutable';

import {
  UPDATE_TOTAL_TIME,
  RESET_TIMER,
  TIMER_COMPLETED
} from '../actions/practice';

const default_state = Map({
  total_time: 90,
  current_drill_index: 0,
});

export default (state = default_state, action) => {
  switch (action.type) {
  case UPDATE_TOTAL_TIME:
    return state.merge({ total_time: action.total_time });
  case RESET_TIMER:
    return state.merge({ current_drill_index: action.current_drill_index })
  case TIMER_COMPLETED:
    return state.merge({ current_drill_index : state.get('current_drill_index') + 1 });
  }

  return state;
};
