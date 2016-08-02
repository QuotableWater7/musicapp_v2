import { Map } from 'immutable';
import {
  FETCH_DRILLS,
  FETCH_DRILLS_SUCCESS,
  FETCH_DRILLS_FAILURE
} from '../actions/practice';

const default_state = Map({
  loading: false
});

export default (state = default_state, action) => {
  switch(action.type) {
  case FETCH_DRILLS:
    return state.merge({ loading: true });
  case FETCH_DRILLS_SUCCESS:
  case FETCH_DRILLS_FAILURE:
    return state.merge({ loading: false });
  }
  return state;
};
