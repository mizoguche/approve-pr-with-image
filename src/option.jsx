// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import optionReducer from './reducers/option';
import optionEpic from './epics/option';
import RawUrlOption from './components/RawUrlOption';

const epickMiddleware = createEpicMiddleware(optionEpic);
const store = createStore(optionReducer, applyMiddleware(epickMiddleware));

render(
  <Provider store={store}>
    <RawUrlOption />
  </Provider>,
  document.getElementById('option'),
);
