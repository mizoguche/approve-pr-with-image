// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

import optionReducer from './reducers/option';
import App from './components/App';
import RawUrlOption from './components/RawUrlOption';
import ImagesView from './components/ImagesView';
import middleware from './middleware';

const reducer = combineReducers({
  option: optionReducer,
  routing: routerReducer,
});

const store = createStore(reducer, middleware);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ImagesView} />
        <Route path="/raw" component={RawUrlOption} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('option'),
);