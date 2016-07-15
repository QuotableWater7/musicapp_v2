'use strict';

import React from 'react';
import { connect } from 'react-redux';

import PencilInput from './pencil_input';

const DrillRow = ({ title, id, removeDrill, updateDrill }) => {
  return (
    <tbody>
      <tr>
        <td><PencilInput value={title} id={id} update={updateDrill}/></td>
        <td></td>
        <td></td>
        <td>
          <div className='btn btn-danger btn-sm' onClick={removeDrill}>-</div>
        </td>
      </tr>
    </tbody>
  );
};

export default DrillRow;
