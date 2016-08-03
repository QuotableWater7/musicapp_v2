import React from 'react';
import { connect } from 'react-redux';

import Practice from '../components/practice';
import DrillsTable from '../components/drills_table';

const PracticeContainer = ({ practice, drills }) => {
  return (
    <Practice practice={practice}>
      <DrillsTable drills={drills}/>
    </Practice>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.params;

  return {
    practice: state.getIn(['practices', id]),
    drills: []
  };
};

export default connect(mapStateToProps)(PracticeContainer);
