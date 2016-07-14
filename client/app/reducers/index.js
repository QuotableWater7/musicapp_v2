'use strict';

export default {
  counterReducer (state, action) {
    state = state || { count: 0 };
    switch(action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
    }

    return state;
  }
}
