import { get, post, destroy } from '../util/ajax_helper';

// THESE PROBABLY DON'T BELONG HERE?
export const UPDATE_TOTAL_TIME = 'UPDATE_TOTAL_TIME';
export const RESET_TIMER = 'RESET_TIMER';
export const TIMER_COMPLETED = 'TIMER_COMPLETED';

export const FETCH_PRACTICES = 'FETCH_PRACTICES';
export const FETCH_PRACTICES_SUCCESS = 'FETCH_PRACTICES_SUCCESS';
export const FETCH_PRACTICES_FAILURE = 'FETCH_PRACTICES_FAILURE';

export const CREATE_PRACTICE = 'CREATE_PRACTICE';
export const CREATE_PRACTICE_SUCCESS = 'CREATE_PRACTICE_SUCCESS';
export const CREATE_PRACTICE_FAILURE = 'CREATE_PRACTICE_FAILURE';

export const DELETE_PRACTICE = 'DELETE_PRACTICE';
export const DELETE_PRACTICE_SUCCESS = 'DELETE_PRACTICE_SUCCESS';
export const DELETE_PRACTICE_FAILURE = 'DELETE_PRACTICE_FAILURE';

export const deletePractice = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_PRACTICE });

    destroy(`/practices/${id}.json`).then(
      (response) => {
        dispatch({ type: DELETE_PRACTICE_SUCCESS, id: id });
      }
    );
  };
};

export const fetchPractices = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PRACTICES });

    get('/practices.json').then(
      (response) => {
        dispatch({ type: FETCH_PRACTICES_SUCCESS, payload: response.data });
      },
      (error) => {
        dispatch({ type: FETCH_PRACTICES_FAILURE });
      }
    );
  };
};

export const createPractice = (opts) => {
  return (dispatch) => {
    dispatch({ type: CREATE_PRACTICE });

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
