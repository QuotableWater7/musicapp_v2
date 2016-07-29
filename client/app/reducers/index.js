import { combineReducers } from 'redux-immutable';

import drill_list from './drill_list';
import routing from './routing';
import practice from './practice';
import practiceUI from './practice_ui';
import timer from './timer';
import user from './user';

export default combineReducers({
  user,
  drill_list,
  routing,
  practice,
  practiceUI,
  timer
})
