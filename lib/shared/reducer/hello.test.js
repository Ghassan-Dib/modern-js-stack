"use strict";

var _hello = require("../action/hello");

var _hello2 = _interopRequireDefault(require("./hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

let helloState;
beforeEach(() => {
  helloState = (0, _hello2.default)(undefined, {});
});
test('handle default', () => {
  expect(helloState.get('message')).toBe('Initial reducer message');
  expect(helloState.get('messageAsync')).toBe('Initial reducer message for async call');
});
test('handle SAY_HELLO', () => {
  helloState = (0, _hello2.default)(helloState, (0, _hello.sayHello)('Test'));
  expect(helloState.get('message')).toBe('Test');
});
test('handle SAY_HELLO_ASYNC_REQUEST', () => {
  helloState = (0, _hello2.default)(helloState, (0, _hello.sayHelloAsyncRequest)());
  expect(helloState.get('messageAsync')).toBe('Loading...');
});
test('handle SAY_HELLO_ASYNC_SUCCESS', () => {
  helloState = (0, _hello2.default)(helloState, (0, _hello.sayHelloAsyncSuccess)('Test async'));
  expect(helloState.get('messageAsync')).toBe('Test async');
});
test('handle SAY_HELLO_ASYNC_FAILURE', () => {
  helloState = (0, _hello2.default)(helloState, (0, _hello.sayHelloAsyncFailure)());
  expect(helloState.get('messageAsync')).toBe('No message received, please check your connection');
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(helloState, "helloState", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/reducer/hello.test.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();