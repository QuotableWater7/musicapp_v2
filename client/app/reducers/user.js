'use strict';

import { Map } from 'immutable';

import {
  REQUEST_SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  UPDATE_USER
} from '../actions/user';

const default_state = Map({
  logged_in: false,
  email: null,
  password: null,
  user_id: null,
  logging_in: false
});

export default (state = default_state, action) => {
  switch(action.type) {
  case UPDATE_USER:
    return state.merge(action.payload);
  case REQUEST_SIGN_IN:
    return state.merge({ logging_in: true });
  case SIGN_IN_SUCCESS:
    return state.merge({
      logging_in: false,
      user_id: action.user_id
    });
  case SIGN_IN_FAILURE:
    return state.merge({
      logging_in: false,
      user_id: null
    });
  }

  return state;
};
