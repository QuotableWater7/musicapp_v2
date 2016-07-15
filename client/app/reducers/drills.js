'use strict';

import { Map, List } from 'immutable';

let default_state = List([
  Map({ title: 'Drill One', id: Math.random()}),
  Map({ title: 'Drill Two', id: Math.random()})
]);

export default (state = default_state, action) => {
  let new_state = state;

  switch(action.type) {
    case 'ADD_DRILL':
    return state.push(Map({ title: '[edit]', id: Math.random() }));
    case 'REMOVE_DRILL':
    return state.filter((drill) => { return drill.get('id') !== action.id });
    case 'UPDATE_DRILL':
    return state.update(
      state.findIndex(function(item) {
        return item.get('id') === action.id;
      }), (item) => {
        return item.merge(action.data);
      }
    );
  }

  return state;
}
