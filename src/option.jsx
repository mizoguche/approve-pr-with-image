// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import optionReducer from './reducers/option';
import optionEpic from './epics/option';
import App from './components/App';
import RawUrlOption from './components/RawUrlOption';

const reducer = combineReducers({
  option: optionReducer,
  routing: routerReducer,
});

const epickMiddleware = createEpicMiddleware(optionEpic);
const store = createStore(reducer, applyMiddleware(epickMiddleware));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RawUrlOption} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('option'),
);