// @flow
import { applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import optionEpic from './epics/option';

const epickMiddleware = createEpicMiddleware(optionEpic);
const middleware = [epickMiddleware];

// $FlowFixMe: constant from DefinePlugin
if ((ENV: string) !== 'production') {
  middleware.push(createLogger());
}

export default applyMiddleware(...middleware);
