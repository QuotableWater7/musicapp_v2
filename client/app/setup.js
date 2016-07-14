'use strict';

import React from 'react';
import { connect } from 'react-redux';

const Setup = ({ count, incrementCounter }) => (
  <div onClick={incrementCounter}>
    Count: {count}
  </div>
)

const mapStateToProps = (state) => {
  return state.counter;
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => { dispatch({ type: 'INCREMENT' }) }
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Setup);

export default wrapper;
