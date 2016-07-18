'use strict';

import decorateDrills from '../selectors/drills';

let timer_ref = null;

export default (store) => {
  return () => {
    let state = store.getState();
    let isOn = state.getIn(['timer', 'isOn']);

    if (isOn && timer_ref === null) {
      startTicking(store);
    } else if (!isOn) {
      stopTicking();
    } else if (isOn && isDrillComplete(state)) {
      stopTicking();

      setToNextActivity(state, store.dispatch);
    }
  }
};

const startTicking = (store) => {
  timer_ref = setInterval(
    () => { store.dispatch({ type: 'TICK', amount: 1 }) },
    1000
  );
};

const stopTicking = () => {
  clearInterval(timer_ref);
  timer_ref = null;
};

const isDrillComplete = (state) => {
  let time_elapsed = state.getIn(['timer', 'time_elapsed']);
  let current_drill = getCurrentDrill(state);
  let time_for_drill = Math.round(current_drill.get('min') * 60);

  return time_elapsed >= time_for_drill;
};

const getCurrentDrill = (state) => {
  let practice = state.get('practice');
  let current_drill_index = practice.get('current_drill_index');
  let drills = decorateDrills(state).entrySeq();

  return drills.get(current_drill_index)[1];
};

const setToNextActivity = (state, dispatch) => {
  let number_of_drills = state.get('drills').size;
  let next_drill_index = state.getIn(['practice', 'current_drill_index']) + 1;

  if (next_drill_index < number_of_drills) {
    dispatch({ type: 'RESET_TIMER', current_drill_index: next_drill_index });
  } else {
    dispatch({ type: 'PRACTICE_COMPLETE' });
  }
};
