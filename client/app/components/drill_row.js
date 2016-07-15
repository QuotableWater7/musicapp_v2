'use strict';

import React from 'react';
import { connect } from 'react-redux';

const DrillRow = ({ title }) => {
  return (
    <tbody>
      <tr>
        <td>{title}</td>
      </tr>
    </tbody>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)(DrillRow);

export default wrapper;
