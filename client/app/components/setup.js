'use strict';

import { List } from 'immutable';
import React from 'react';
import TotalTimeSelector from './total_time_selector';
import DrillsTable from './drills_table';

const Setup = () => (
  <div>
    <div className='row'>
      <div className='col-md-12 text-xs-center'>
        Total time <TotalTimeSelector/>
      </div>
    </div>
    <div className='row margin-top-10'>
      <div className='col-md-8 col-md-offset-2'>
        <DrillsTable/>
      </div>
    </div>
  </div>
)

export default Setup;
