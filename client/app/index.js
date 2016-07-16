'use strict';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';

import Layout from './components/layout';
import Welcome from './components/welcome';
import Setup from './components/setup';

import reducers from './reducers/index';

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});

$(document).ready(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Welcome}></IndexRoute>
          <Route path='/setup' component={Setup}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
});
