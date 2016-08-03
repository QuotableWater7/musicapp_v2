import { Map } from 'immutable';
import _ from 'lodash';

import {
  UPDATE_TOTAL_TIME,
  RESET_TIMER,
  TIMER_COMPLETED,
  FETCH_PRACTICES_SUCCESS,
  FETCH_PRACTICES_FAILURE,
  CREATE_PRACTICE_SUCCESS,
  DELETE_PRACTICE_SUCCESS
} from '../actions/practice';

const default_state = Map();

export default (state = default_state, action) => {
  switch (action.type) {
  case UPDATE_TOTAL_TIME:
    return state.merge({ total_time: action.total_time });
  case RESET_TIMER:
    return state.merge({ current_drill_index: action.current_drill_index })
  case TIMER_COMPLETED:
    return state.merge({ current_drill_index : state.get('current_drill_index') + 1 });
  case FETCH_PRACTICES_SUCCESS:
    const practices = _.keyBy(action.payload, 'id');
    return state.merge(practices);
  case FETCH_PRACTICES_FAILURE:
    return default_state.merge({});
  case CREATE_PRACTICE_SUCCESS:
    const practice = action.payload;
    return state.merge({ [practice.id]: practice });
  case DELETE_PRACTICE_SUCCESS:
    return state.delete(action.id);
  }

  return state;
};

