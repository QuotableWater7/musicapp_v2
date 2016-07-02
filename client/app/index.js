'use strict';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';

var Component = require('./component');

$(document).ready(() => {
  render(<Component/>, document.getElementById('app'));
});
