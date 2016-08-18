import React from 'react';

import Row from './row';
import Toolbar from '../components/toolbar';

export default ({ children }) => {
  return (
    <div>
      <Toolbar/>
      <div className='container'>
        <Row>{children}</Row>
      </div>
    </div>
  );
};
