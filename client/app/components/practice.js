'use strict';

import React from 'react';
import { connect } from 'react-redux';
import decorateDrills from '../selectors/drills';

const Practice = ({ drill, time_elapsed, time_remaining, timer, playOrPause }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <h3 className='text-xs-center'>Practice</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <h4>{drill.get('title')}</h4>
          <p>{time_remaining}</p>
          <div className='btn btn-primary btn-sm' onClick={playOrPause(timer.get('isOn'))}>
            {timer.get('isOn') ? 'Pause' : 'Play'}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let drills = decorateDrills(state).entrySeq();
  let drill_index = state.getIn(['practice', 'current_drill_index']);
  let current_drill = drills.get(drill_index)[1];
  let time_elapsed = state.getIn(['timer', 'time_elapsed']);

  return {
    drill: current_drill,
    timer: state.get('timer'),
    time_elapsed: time_elapsed,
    time_remaining: Math.round(current_drill.get('min') * 60) - time_elapsed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playOrPause(isOn) {
      return () => {
        let action = isOn ? 'STOP_TIMER' : 'START_TIMER';
        dispatch({ type: action });
      };
    }
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Practice);

export default wrapper;
