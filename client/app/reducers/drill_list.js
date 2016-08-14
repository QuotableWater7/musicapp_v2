import _ from 'lodash';
import { Map, List, fromJS } from 'immutable';

import {
  FETCH_DRILLS_SUCCESS,
  CREATE_DRILL_SUCCESS
} from '../actions/drill';

const default_weight = 50;

export default (state = Map(), action) => {
  switch(action.type) {
  case CREATE_DRILL_SUCCESS:
    return state.merge({ [action.payload.id]: action.payload });
  case 'REMOVE_DRILL':
    return state.delete(action.id);
  case 'UPDATE_DRILL':
    return state.merge({
      [action.id]: state.get(action.id).merge(action.data)
    });
  case 'RESET_DRILL_WEIGHTS':
    return state.map((drill) => drill.merge({ weight: default_weight }));
  case FETCH_DRILLS_SUCCESS:
    return fromJS(_.keyBy(action.payload, 'id'));
  }

  return state;
}
