'use strict';

import React from 'react';
import { connect } from 'react-redux';

const DrillRow = ({ title, id, removeDrill }) => {
  return (
    <tbody>
      <tr>
        <td><input className='form-control' value={title}/></td>
        <td></td>
        <td></td>
        <td>
          <div className='btn btn-danger btn-sm' onClick={removeDrill(id)}>-</div>
        </td>
      </tr>
    </tbody>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeDrill(id) { return () => { dispatch({ type: 'REMOVE_DRILL', id: id }) } }
  };
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillRow);

export default wrapper;
