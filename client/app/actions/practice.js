'use strict';

import { get } from '../util/ajax_helper';

// THESE PROBABLY DON'T BELONG HERE?
export const UPDATE_TOTAL_TIME = 'UPDATE_TOTAL_TIME';
export const RESET_TIMER = 'RESET_TIMER';
export const TIMER_COMPLETED = 'TIMER_COMPLETED';

export const FETCH_PRACTICE = 'FETCH_PRACTICE';
export const FETCH_PRACTICE_SUCCESS = 'FETCH_PRACTICE_SUCCESS';
export const FETCH_PRACTICE_FAILURE = 'FETCH_PRACTICE_FAILURE';

export const fetchPractices = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRACTICE });

    get('/practices.json').then(
      (response) => {
        dispatch({ type: FETCH_PRACTICE_SUCCESS, payload: response.data });
      },
      (error) => {
        dispatch({ type: FETCH_PRACTICE_FAILURE });
      }
    );
  };
};
