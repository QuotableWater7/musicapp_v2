'use strict';

import { push } from 'react-router-redux';

import { get, post, destroy } from '../util/ajax_helper';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const REQUEST_SIGN_OUT = 'REQUEST_SIGN_OUT';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (attribute, value) => {
  return { type: UPDATE_USER, payload: { [attribute]: value } };
}

export const signUserIn = (email, password) => {
  return (dispatch) => {
    dispatch({ type: REQUEST_SIGN_IN });

    post('/sessions.json', { email, password }).then(
      (response) => {
        dispatch({ type: SIGN_IN_SUCCESS, user_id: response.data.user_id });
        dispatch(push('/setup'));
      },
      (error) => {
        dispatch({ type: SIGN_IN_FAILURE });
      }
    );
  };
};

export const signUserOut = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_SIGN_OUT });
    destroy('/sessions.json');
  };
};

export const fetchUserInfo = () => {
  return (dispatch) => {
    get('/welcome.json').then(
      (response) => {
        dispatch({ type: SIGN_IN_SUCCESS, user_id: response.data.id })
      }
    );
  };
};
