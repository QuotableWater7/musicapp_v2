import { createSelector } from 'reselect';
import _ from 'lodash';

const getDrills = (state, props) => {
  const { id } = props.params;

  return state.get('drill_list').filter(
    drill => drill.get('practice_id') === id
  );
};

const getTotalTime = (state, props) => {
  const { id } = props.params;
  const practice = state.get('practices').get(id);

  if (!practice) { return; }

  return practice.get('total_time');
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
