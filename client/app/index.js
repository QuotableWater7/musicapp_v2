import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import Layout from './components/layout';
import Welcome from './components/welcome';
import PracticeList from './components/practice_list';
import Practice from './components/practice';
import PracticeContainer from './containers/practice';
import Timer from './components/timer';
import SignIn from './components/sign_in';

import reducer from './reducers/index';

import timerUpdater from './util/timer_updater';

import { fetchUserInfo } from './actions/user';
import { fetchPractices } from './actions/practice';
import { fetchDrills } from './actions/drill';

const store = createStore(
  reducer,
  applyMiddleware(routerMiddleware(browserHistory), thunk)
);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState(state) { return state.get('routing').toJS(); }
});

store.subscribe(timerUpdater(store));
store.dispatch(fetchUserInfo());
store.dispatch(fetchPractices());
store.dispatch(fetchDrills());

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/app' component={Layout}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path='/app/practices' component={PracticeList}></Route>
        <Route path='/app/practice/:id' component={PracticeContainer}></Route>
        <Route path='/app/timer' component={Timer}></Route>
        <Route path='/app/sign-in' component={SignIn}></Route>
      </Route>
      <Redirect from='/' to='/app' />
    </Router>
  </Provider>,
  document.getElementById('app')
);
