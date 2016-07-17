'use strict';

let timer_ref = null;

export default (store) => {
  return () => {
    let state = store.getState();
    let timer = state.get('timer');
    let isOn = state.getIn(['timer', 'isOn']);

    if (isOn && timer_ref === null) {
      timer_ref = setInterval(
        () => { store.dispatch({ type: 'TICK', amount: 1 }) },
        1000
      );
    } else if (!isOn) {
      clearInterval(timer_ref);
    }
  }
};
