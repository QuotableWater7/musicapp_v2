'use strict';

import { Map } from 'immutable';

const default_state = Map({ total_time: 90 });

export default (state = default_state, action) => {
  switch (action.type) {
  case 'UPDATE_TOTAL_TIME':
    return state.merge({ total_time: action.total_time });
  }

  return state;
};
