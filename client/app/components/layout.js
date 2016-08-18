import React from 'react';

import Toolbar from './toolbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar/>
      <div className='container'>
      {children}
      </div>
      <div className='footer-spacer'/>
    </div>
  );
};

export default Layout;
