import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import Layout from './components/layout';
import Welcome from './components/welcome';
import PracticeList from './components/practice_list';
import Practice from './components/practice';
import Timer from './components/timer';
import SignIn from './components/sign_in';

import reducer from './reducers/index';

import timerUpdater from './util/timer_updater';

import { fetchPractices } from './actions/practice';
import { fetchUserInfo } from './actions/user';

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(hashHistory), thunk)
);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) { return state.get('routing').toJS(); }
});

store.subscribe(timerUpdater(store));
store.dispatch(fetchUserInfo());
store.dispatch(fetchPractices());

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
