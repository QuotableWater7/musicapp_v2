import { createSelector } from 'reselect';
import _ from 'lodash';

const getPracticeID = (state) => {
  return _.last(
    state.get('routing')
      .toJSON()
      .locationBeforeTransitions
      .pathname
      .split('/')
  );
};

const getDrills = (state) => {
  const practice_id = Number(getPracticeID(state));
  return state.get('drill_list').filter(
    drill => drill.get('practice_id') === practice_id
  );
};

const getTotalTime = (state) => {
  const practice_id = getPracticeID(state);

  return state.get('practices').get(practice_id).get('total_time');
};

export default createSelector(
  [getDrills, getTotalTime],
  (drills, total_time) => {
    let total_weight = drills.reduce((memo, drill) => Number(drill.get('weight')) + memo, 0);
    let time_multiplier = total_time * 60.0 / total_weight;

    return drills.map((drill) => (
      drill.set('sec', Math.round(drill.get('weight') * time_multiplier))
    ));
  }
);
