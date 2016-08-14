import React from 'react';
import { connect } from 'react-redux';

import { updatePractice } from '../actions/practice';

import Practice from '../components/practice';
import DrillsTable from '../components/drills_table';

import getDrills from '../selectors/drills';

const PracticeContainer = ({ practice, drills, params, updatePractice }) => {
  return (
    <Practice
      practice={practice}
      updatePractice={updatePractice}
    >
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

const mapDispatchToProps = (dispatch) => {
  return {
    updatePractice(id) {
      return (event) => dispatch(
        updatePractice(id, { [event.target.name]: event.target.value })
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContainer);
