import React from 'react';
import { connect } from 'react-redux';

import Practice from '../components/practice';
import DrillsTable from '../components/drills_table';

import getDrills from '../selectors/drills';

const PracticeContainer = ({ practice, drills, params }) => {
  return (
    <Practice practice={practice}>
      <DrillsTable drills={drills} practice_id={params.id}/>
    </Practice>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.params;

  return {
    practice: state.getIn(['practices', id]),
    drills: getDrills(state, ownProps).entrySeq()
  };
};

export default connect(mapStateToProps)(PracticeContainer);
