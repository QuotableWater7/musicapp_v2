'use strict';

// import { createSelector } from 'reselect';

export default function decorateDrills(drills, total_time = 90) {
  let total_weight = drills.reduce((memo, drill) => Number(drill.get('weight')) + memo, 0);
  let time_multiplier = total_time * 1.0 / total_weight;

  return drills.map((drill) => (
    drill.set('min', Math.round(drill.get('weight') * time_multiplier))
  ));
}
