"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _hello = _interopRequireDefault(require("../shared/reducer/hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const initStore = plainState => {
  const preloadedState = {};

  if (plainState && plainState !== null && plainState !== void 0 && plainState.hello) {
    // flow-disable-incompatible-use
    preloadedState.hello = (0, _hello.default)(undefined, {}).merge(_immutable.default.fromJS(plainState.hello));
  }

  return (0, _redux.createStore)((0, _redux.combineReducers)({
    hello: _hello.default
  }), preloadedState, (0, _redux.applyMiddleware)(_reduxThunk.default));
};

const _default = initStore;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initStore, "initStore", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/init-store.js");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/init-store.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();