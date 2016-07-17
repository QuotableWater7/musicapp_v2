'use strict';

import { Map, List, fromJS } from 'immutable';

let default_state = fromJS({
  [1]: { title: 'Drill One', weight: 50, id: 1 },
  [2]: { title: 'Drill Two', weight: 50, id: 2 }
});

let current_id = 3;

export default (state = default_state, action) => {
  switch(action.type) {
  case 'ADD_DRILL':
    state = state.merge({
      [current_id]: { title: '[edit]', weight: 50, id: current_id }
    });
    current_id++;
    return state;
  case 'REMOVE_DRILL':
    return state.delete(action.id);
  case 'UPDATE_DRILL':
    return state.merge({
      [action.id]: state.get(action.id).merge(action.data)
    });
  case 'RESET_DRILL_WEIGHTS':
    return state.map((drill) => drill.merge({ weight: 50 }));
  }

  return state;
}
