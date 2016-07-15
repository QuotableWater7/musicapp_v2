'use strict';

export default (state, action) => {
  state = state || [{ title: 'Drill One', id: Math.random()}, { title: 'Drill Two', id: Math.random() }];
  let new_state;

  switch(action.type) {
    case 'ADD_DRILL':
    new_state = state.concat([{ title: '[edit]', id: Math.random() }]);
    return new_state;
    case 'REMOVE_DRILL':
    new_state = state.filter((drill) => { return drill.id !== action.id });
    return new_state;
    case 'UPDATE_DRILL':
    let found_index = state.findIndex((drill) => drill.id === action.id);
    state[found_index] = Object.assign({}, state[found_index], action.data);
    return state.slice();
  }

  return state;
}
