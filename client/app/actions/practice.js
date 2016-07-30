import { get, post } from '../util/ajax_helper';

// THESE PROBABLY DON'T BELONG HERE?
export const UPDATE_TOTAL_TIME = 'UPDATE_TOTAL_TIME';
export const RESET_TIMER = 'RESET_TIMER';
export const TIMER_COMPLETED = 'TIMER_COMPLETED';

export const FETCH_PRACTICE = 'FETCH_PRACTICE';
export const FETCH_PRACTICE_SUCCESS = 'FETCH_PRACTICE_SUCCESS';
export const FETCH_PRACTICE_FAILURE = 'FETCH_PRACTICE_FAILURE';

export const CREATE_PRACTICE = 'CREATE_PRACTICE';
export const CREATE_PRACTICE_SUCCESS = 'CREATE_PRACTICE_SUCCESS';
export const CREATE_PRACTICE_FAILURE = 'CREATE_PRACTICE_FAILURE';

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

export const createPractice = (opts) => {
  return (dispatch, getState) => {
    dispatch({ type: CREATE_PRACTICE });

    const user_id = getState().getIn(['user', 'user_data', 'id']);
    opts = { ...opts, user_id };

    post('/practices.json', { practice: opts }).then(
      (response) => {
        dispatch({ type: CREATE_PRACTICE_SUCCESS, payload: response.data });
      },
      (error) => {
        dispatch({ type: CREATE_PRACTICE_FAILURE });
      }
    );
  };
};
