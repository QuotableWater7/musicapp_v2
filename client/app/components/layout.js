import React from 'react';

import Toolbar from './toolbar';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Toolbar/>
      {children}
    </div>
  );
};

export default Layout;
