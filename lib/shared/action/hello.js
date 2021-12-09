"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHelloAsyncSuccess = exports.sayHelloAsyncRequest = exports.sayHelloAsyncFailure = exports.sayHelloAsync = exports.sayHello = exports.SAY_HELLO_ASYNC_SUCCESS = exports.SAY_HELLO_ASYNC_REQUEST = exports.SAY_HELLO_ASYNC_FAILURE = exports.SAY_HELLO = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _reduxActions = require("redux-actions");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const SAY_HELLO = 'SAY_HELLO';
exports.SAY_HELLO = SAY_HELLO;
const SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST';
exports.SAY_HELLO_ASYNC_REQUEST = SAY_HELLO_ASYNC_REQUEST;
const SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS';
exports.SAY_HELLO_ASYNC_SUCCESS = SAY_HELLO_ASYNC_SUCCESS;
const SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE';
exports.SAY_HELLO_ASYNC_FAILURE = SAY_HELLO_ASYNC_FAILURE;
const sayHello = (0, _reduxActions.createAction)(SAY_HELLO);
exports.sayHello = sayHello;
const sayHelloAsyncRequest = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_REQUEST);
exports.sayHelloAsyncRequest = sayHelloAsyncRequest;
const sayHelloAsyncSuccess = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_SUCCESS);
exports.sayHelloAsyncSuccess = sayHelloAsyncSuccess;
const sayHelloAsyncFailure = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_FAILURE);
exports.sayHelloAsyncFailure = sayHelloAsyncFailure;

const sayHelloAsync = num => async dispatch => {
  dispatch(sayHelloAsyncRequest());

  try {
    const res = await _axios.default.get((0, _routes.helloEndpointRoute)(num));

    if (!res.data.serverMessage) {
      throw Error('No server message');
    }

    dispatch(sayHelloAsyncSuccess(res.data.serverMessage));
  } catch (error) {
    dispatch(sayHelloAsyncFailure());
  }
};

exports.sayHelloAsync = sayHelloAsync;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SAY_HELLO, "SAY_HELLO", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(SAY_HELLO_ASYNC_REQUEST, "SAY_HELLO_ASYNC_REQUEST", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(SAY_HELLO_ASYNC_SUCCESS, "SAY_HELLO_ASYNC_SUCCESS", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(SAY_HELLO_ASYNC_FAILURE, "SAY_HELLO_ASYNC_FAILURE", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(sayHello, "sayHello", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(sayHelloAsyncRequest, "sayHelloAsyncRequest", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(sayHelloAsyncSuccess, "sayHelloAsyncSuccess", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(sayHelloAsyncFailure, "sayHelloAsyncFailure", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
  reactHotLoader.register(sayHelloAsync, "sayHelloAsync", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();