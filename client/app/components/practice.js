'use strict';

import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import decorateDrills from '../selectors/drills';

import { startTimer, stopTimer } from '../actions/timer';

const seconds_in_hour = 60 * 60;

const Practice = ({ drill, time_elapsed, timer, startOrStopTimer }) => {
  if (!drill) { return addDrillsMessage(); }

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
            <p className='countdown-text'>{formattedTime(drill.get('sec') - time_elapsed)}</p>
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

function addDrillsMessage() {
  return (
    <div className='row'>
      <div className='col-md-8 col-md-offset-2'>
        <div className='alert alert-danger'>
          It appears you have not added anything to practice!
        </div>
      </div>
    </div>
  );
}

function formattedTime(seconds) {
  seconds = roundToNearest15(seconds);
  let duration = moment.duration(seconds, 'seconds');

  if (seconds > seconds_in_hour) {
    return moment.utc(duration.asMilliseconds()).format('H:mm:ss');
  } else {
    return moment.utc(duration.asMilliseconds()).format('mm:ss');
  }
}

function roundToNearest15(seconds) {
  return (seconds - seconds % 15) + Math.round((seconds % 15 / 15)) * 15;
}

const mapStateToProps = (state) => {
  let drills = decorateDrills(state).entrySeq();
  let drill_index = state.getIn(['practice', 'current_drill_index']);
  let drill_entry = drills.get(drill_index);
  let time_elapsed = state.getIn(['timer', 'time_elapsed']);

  return {
    drill: drill_entry && drill_entry[1],
    timer: state.get('timer'),
    time_elapsed: time_elapsed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startOrStopTimer(isOn) {
      return () => {
        let action = isOn ? stopTimer : startTimer;
        dispatch(action());
      };
    }
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Practice);

export default wrapper;
