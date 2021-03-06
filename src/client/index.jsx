/* eslint no-underscore-dangle: 0 */
import 'babel-polyfill';
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import Immutable from 'immutable';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import $ from 'jquery';
import Tether from 'tether';
import setUpSocketIO from './socket';
import { isProd } from '../shared/util';
import helloReducer from '../shared/reducer/hello';
import App from '../shared/app';
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config';

window.jquery = $;
window.Tether = Tether;

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  combineReducers({ hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);

jssServerSide.parentNode.removeChild(jssServerSide);

setUpSocketIO(store);
