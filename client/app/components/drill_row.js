'use strict';

import React from 'react';

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
        <td className='remove-row'>
          <i className='fa fa-remove' onClick={removeDrill}/>
        </td>
      </tr>
    </tbody>
  );
};

export default DrillRow;
