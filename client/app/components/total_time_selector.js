'use strict';

import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';

const total_time_options = List([
  15, 30, 45, 60, 90, 120, 180, 300
]);

function TotalTimeSelector({ practice, updateTotalTime }) {
  return (
    <select value={practice.get('total_time')} onChange={updateTotalTime}>
      {total_time_options.map(renderOption)}
    </select>
  );
};

const renderOption = (option) => {
  return <option value={option} key={option}>{option} min</option>;
};

const mapStateToProps = (state) => {
  return { practice: state.get('practice') };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTotalTime: (event) => dispatch({
      type: 'UPDATE_TOTAL_TIME', total_time: Number(event.target.value)
    })
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(TotalTimeSelector);

export default wrapper;
