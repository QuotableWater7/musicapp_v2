'use strict';

import React from 'react';
import { connect } from 'react-redux';

import PencilInput from './pencil_input';

const DrillRow = ({ drill, removeDrill, updateDrill }) => {
  return (
    <tbody>
      <tr>
        <td>
          <PencilInput
            name='title'
            value={drill.get('title')}
            id={drill.get('id')}
            update={updateDrill}
          />
        </td>
        <td>
          <input
            className='importance-slider'
            type='range'
            name='weight'
            min={1}
            max={100}
            step={1}
            value={drill.get('weight')}
            onChange={updateDrill}
          />
        </td>
        <td></td>
        <td>
          <div className='btn btn-danger btn-sm' onClick={removeDrill}>-</div>
        </td>
      </tr>
    </tbody>
  );
};

export default DrillRow;
