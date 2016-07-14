'use strict';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Layout from './layout';
import Setup from './setup';
import reducers from './reducers/index';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store);

$(document).ready(() => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Layout}>
          <Route path='/add' component={Setup}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
});
