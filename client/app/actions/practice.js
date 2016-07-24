'use strict';

import { get } from '../util/ajax_helper';

export const UPDATE_TOTAL_TIME = 'UPDATE_TOTAL_TIME';
export const RESET_TIMER = 'RESET_TIMER';
export const TIMER_COMPLETED = 'TIMER_COMPLETED';

export const fetchPractice = () => {
  return (dispatch) => {
    get('/practices/5.json').then((response) => {
      dispatch({ type: 'LOAD_DRILLS', payload: response.data })
    });
  };
};
