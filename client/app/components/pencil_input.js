'use strict';

import React from 'react';
import { connect } from 'react-redux';

const PencilInput = ({ name, value, classes, update }) => {
  return (
    <div className='pencil-input inner-addon right-addon'>
      <i className='fa fa-pencil'></i>
      <input
        type='text'
        name={name}
        className={'form-control ' + classes}
        value={value}
        onChange={update}
        onClick={(event) => event.target.select()}
      />
    </div>
  );
}

export default PencilInput;
