import React from 'react';
import { connect } from 'react-redux';
import Practice from '../components/practice';

const PracticeContainer = (practice) => {
  return <Practice practice={practice}/>;
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.params;

  return { practice: state.getIn(['practices', id]) };
};

export default connect(mapStateToProps)(PracticeContainer);
