'use strict';

import React from 'react';
import { connect } from 'react-redux';
import DrillsTable from './drills_table';

const Setup = ({ drills }) => (
  <div className='row'>
    <div className='col-md-8 col-md-offset-2'>
      <h5>Drills</h5>
      <DrillsTable drills={drills}/>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeDrill(id) {  },
  };
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)(Setup);

export default wrapper;
