import { Map } from 'immutable';
import {
  FETCH_PRACTICES,
  FETCH_PRACTICES_SUCCESS,
  FETCH_PRACTICES_FAILURE
} from '../actions/practice';

const default_state = Map({
  loading_practices: false
});

export default (state = default_state, action) => {
  switch(action.type) {
  case FETCH_PRACTICES:
    return state.merge({ loading_practices: true });
  case FETCH_PRACTICES_SUCCESS:
  case FETCH_PRACTICES_FAILURE:
    return state.merge({ loading_practices: false });
  }
  return state;
};
