'use strict';

import { Map, List } from 'immutable';

import {
  REQUEST_SIGN_IN,
  REQUEST_SIGN_OUT,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  UPDATE_USER
} from '../actions/user';

const default_state = Map({
  logged_in: false,
  email: null,
  password: null,
  user_id: null,
  logging_in: false,
  errors: List(),
  user_data: Map()
});

export default (state = default_state, action) => {
  state = state.merge({ errors: List() });

  switch(action.type) {
  case UPDATE_USER:
    return state.merge(action.payload);
  case REQUEST_SIGN_IN:
    return state.merge({ logging_in: true });
  case REQUEST_SIGN_OUT:
    return state.merge(default_state);
  case SIGN_IN_SUCCESS:
    return state.merge({
      initialized: true,
      logging_in: false,
      logged_in: true,
      user_data: action.user_data
    });
  case SIGN_IN_FAILURE:
    return state.merge({
      logging_in: false,
      logged_in: false,
      errors: List(['Your email and/or password was incorrect.']),
      user_data: Map()
    });
  }

  return state;
};
