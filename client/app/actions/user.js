'use strict';

export const REQUEST_SIGN_IN = 'REQUEST_SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (attribute, value) => {
  return { type: UPDATE_USER, payload: { [attribute]: value } };
}
