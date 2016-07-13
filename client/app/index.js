'use strict';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

var Layout = require('./layout');

$(document).ready(() => {
  render(<Layout/>, document.getElementById('app'));
});
