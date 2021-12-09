"use strict";

require("babel-polyfill");

var _reactHotLoader = require("react-hot-loader");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _immutable = _interopRequireDefault(require("immutable"));

var _reactRouterDom = require("react-router-dom");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reactRedux = require("react-redux");

var _jquery = _interopRequireDefault(require("jquery"));

var _tether = _interopRequireDefault(require("tether"));

var _socket = _interopRequireDefault(require("./socket"));

var _util = require("../shared/util");

var _hello = _interopRequireDefault(require("../shared/reducer/hello"));

var _app = _interopRequireDefault(require("../shared/app"));

var _config = require("../shared/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

window.jquery = _jquery.default;
window.Tether = _tether.default; // eslint-disable-next-line no-underscore-dangle

const composeEnhancers = (_util.isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _redux.compose;
const preloadedState = window.__PRELOADED_STATE__;
const store = (0, _redux.createStore)((0, _redux.combineReducers)({
  hello: _hello.default
}), {
  hello: _immutable.default.fromJS(preloadedState.hello)
}, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default)));
const rootEl = document.querySelector(_config.APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: reduxStore
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_reactHotLoader.AppContainer, null, /*#__PURE__*/_react.default.createElement(AppComponent, null))));

_reactDom.default.render(wrapApp(_app.default, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default;

    _reactDom.default.render(wrapApp(NextApp, store), rootEl);
  });
}

const jssServerSide = document.querySelector(_config.JSS_SSR_SELECTOR);
jssServerSide.parentNode.removeChild(jssServerSide);
(0, _socket.default)(store);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
  reactHotLoader.register(preloadedState, "preloadedState", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
  reactHotLoader.register(store, "store", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
  reactHotLoader.register(rootEl, "rootEl", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
  reactHotLoader.register(wrapApp, "wrapApp", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
  reactHotLoader.register(jssServerSide, "jssServerSide", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/index.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();