'use strict';

import React from 'react';
import { connect } from 'react-redux';
import DrillRow from './drill_row';

const DrillsTable = ({ drills }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Col 1</th>
          <th>Col 2</th>
        </tr>
      </thead>
      {drills.map((drill) => <DrillRow {...drill} key={drill.title}/>)}
    </table>
  );
};

const mapStateToProps = (state) => {
  return state.drills;
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillsTable);

export default wrapper;
