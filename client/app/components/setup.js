'use strict';

import React from 'react';
import DrillsTable from './drills_table';

const Setup = ({ drills }) => (
  <div className='row'>
    <div className='col-md-8 col-md-offset-2'>
      <DrillsTable/>
    </div>
  </div>
)

export default Setup;
