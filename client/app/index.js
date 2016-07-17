'use strict';

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
import Practice from './components/practice';

import reducers from './reducers/index';

import timerUpdater from './util/timer_updater';

const store = createStore(combineReducers(reducers));
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});

store.subscribe(timerUpdater(store));

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path='/setup' component={Setup}></Route>
        <Route path='/practice' component={Practice}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
