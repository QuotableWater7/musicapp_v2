'use strict';

import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';

import Layout from './components/layout';
import Welcome from './components/welcome';
import PracticeList from './components/practice_list';
import Practice from './components/practice';
import Timer from './components/timer';
import SignIn from './components/sign_in';

import reducers from './reducers/index';

import timerUpdater from './util/timer_updater';

import { fetchPractice } from './actions/practice';
import { fetchUserInfo } from './actions/user';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(routerMiddleware(hashHistory), thunk)
);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) => state.get('routing').toJS()
});

store.subscribe(timerUpdater(store));
store.dispatch(fetchPractice());
store.dispatch(fetchUserInfo());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path='/practices' component={PracticeList}></Route>
        <Route path='/practice/:id' component={Practice}></Route>
        <Route path='/timer' component={Timer}></Route>
        <Route path='/sign-in' component={SignIn}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
