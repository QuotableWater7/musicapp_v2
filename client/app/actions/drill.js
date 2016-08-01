import { get, post } from '../util/ajax_helper';

export const FETCH_DRILLS = 'FETCH_DRILLS';
export const FETCH_DRILLS_SUCCESS = 'FETCH_DRILLS_SUCCESS';
export const FETCH_DRILLS_FAILURE = 'FETCH_DRILLS_FAILURE';

export const CREATE_DRILL = 'CREATE_DRILL';
export const CREATE_DRILL_SUCCESS = 'CREATE_DRILL_SUCCESS';
export const CREATE_DRILL_FAILURE = 'CREATE_DRILL_FAILURE';

export const createDrill = (practice_id) => {
  return (dispatch) => {
    dispatch({ type: CREATE_DRILL });

    post('/drills.json', { drill: { name: '[edit]', weight: 50, practice_id } }).then(
      (response) => { dispatch({ type: CREATE_DRILL_SUCCESS, payload: response.data }) }
    )
  };
};
