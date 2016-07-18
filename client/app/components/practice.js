'use strict';

import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import decorateDrills from '../selectors/drills';

const seconds_in_hour = 60 * 60;

const Practice = ({ drill, time_elapsed, time_remaining, timer, startOrStopTimer }) => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <h3 className='text-xs-center'>{drill.get('title')}</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 col-md-offset-2'>
          <div className='timer-countdown'>
            <p className='countdown-text'>{formattedTime(time_remaining)}</p>
            <img src='/assets/clock.jpg'/>
          </div>
        </div>
      </div>
      <div className='row text-xs-center margin-top-10'>
        <div className='btn btn-primary btn-sm' onClick={startOrStopTimer(timer.get('isOn'))}>
          {timer.get('isOn') ? 'Pause' : 'Practice!'}
        </div>
      </div>
    </div>
  );
};

function formattedTime(seconds) {
  let duration = moment.duration(seconds, 'seconds');

  if (seconds > seconds_in_hour) {
    return moment.utc(duration.asMilliseconds()).format('H:mm:ss');
  } else {
    return moment.utc(duration.asMilliseconds()).format('mm:ss');
  }
}

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
    startOrStopTimer(isOn) {
      return () => {
        let action = isOn ? 'STOP_TIMER' : 'START_TIMER';
        dispatch({ type: action });
      };
    }
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Practice);

export default wrapper;
