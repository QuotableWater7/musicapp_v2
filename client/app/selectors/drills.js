'use strict';

import { createSelector } from 'reselect';

const getDrills = (state) => state.get('drills');
const getTotalTime = (state) => state.get('practice').get('total_time');

export default createSelector(
  [getDrills, getTotalTime],
  (drills, total_time) => {
    let total_weight = drills.reduce((memo, drill) => Number(drill.get('weight')) + memo, 0);
    let time_multiplier = total_time * 1.0 / total_weight;

    return drills.map((drill) => (
      drill.set('min', drill.get('weight') * time_multiplier)
    ));
  }
);
