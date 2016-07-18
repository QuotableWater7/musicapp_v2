'use strict';

import React from 'react';

const Welcome = () => {
  return (
    <div className='row'>
      <div className='col-md-8 col-md-offset-2'>
        <h3 className='text-xs-center'>Welcome!</h3>
        <hr/>
        <p>
          This tool helps musicians organize their practice time in a more optimal
          way. It allows you to select your total available time and a list of
          activities to practice. After weighting the activities by importance, the
          time is divied up and you can practice without having to worry about when
          to change focus!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
