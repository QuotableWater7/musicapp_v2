'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const UPDATE_TOTAL_TIME = 'UPDATE_TOTAL_TIME';
export const RESET_TIMER = 'RESET_TIMER';
export const TIMER_COMPLETED = 'TIMER_COMPLETED';

export const fetchPractice = () => {
  return (dispatch) => {
    fetch('/practices/5.json').then(
      (response) => {
        response.json().then(
          (json) => dispatch({ type: 'LOAD_DRILLS', payload: json })
        )
      }
    );
  };
};
