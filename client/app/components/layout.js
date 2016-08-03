import React from 'react';

import Toolbar from './toolbar';

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <br/>
      <Toolbar/>
      <br/><br/>
      {children}
    </div>
  );
};

export default Layout;
