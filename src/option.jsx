// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import optionReducer, { fetchImageEpic } from './reducers/option';
import BulkUrlOption from './containers/BulkUrlOption';

const epickMiddleware = createEpicMiddleware(fetchImageEpic);

const store = createStore(optionReducer, applyMiddleware(epickMiddleware));

render(
  <Provider store={store}>
    <BulkUrlOption />
  </Provider>,
  document.getElementById('option'),
);
