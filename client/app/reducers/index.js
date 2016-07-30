import { combineReducers } from 'redux-immutable';

import drill_list from './drill_list';
import routing from './routing';
import practices from './practices';
import practiceUI from './practice_ui';
import timer from './timer';
import user from './user';

export default combineReducers({
  user,
  drill_list,
  routing,
  practices,
  practiceUI,
  timer
})
