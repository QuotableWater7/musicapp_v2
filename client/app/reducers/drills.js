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
  }

  return state;
}
