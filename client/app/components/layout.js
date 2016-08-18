import React from 'react';

import Toolbar from './toolbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar/>
      <div className='container'>
      {children}
      </div>
    </div>
  );
};

export default Layout;
