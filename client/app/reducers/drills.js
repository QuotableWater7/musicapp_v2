'use strict';

import { Map, List, fromJS } from 'immutable';

const default_weight = 50;
let current_id = 0;

export default (state = Map(), action) => {
  switch(action.type) {
  case 'ADD_DRILL':
    state = state.merge({
      [current_id]: { title: '[edit]', weight: default_weight, id: current_id }
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
    return state.map((drill) => drill.merge({ weight: default_weight }));
  }

  return state;
}
