"use strict";

var _fetchMock = _interopRequireDefault(require("fetch-mock"));

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _hello = require("./hello");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const mockStore = (0, _reduxMockStore.default)([_reduxThunk.default]);
afterEach(() => {
  _fetchMock.default.restore();
});
test('sayHelloAsync success', () => {
  _fetchMock.default.get((0, _routes.helloEndpointRoute)(666), {
    serverMessage: 'Async hello success'
  });

  const store = mockStore();
  return store.dispatch((0, _hello.sayHelloAsync)(666)).then(() => {
    expect(store.getActions()).toEqual([(0, _hello.sayHelloAsyncRequest)(), (0, _hello.sayHelloAsyncSuccess)('Async hello success')]);
  });
});
test('sayHelloAsync 404', () => {
  _fetchMock.default.get((0, _routes.helloEndpointRoute)(666), 404);

  const store = mockStore();
  return store.dispatch((0, _hello.sayHelloAsync)(666)).then(() => {
    expect(store.getActions()).toEqual([(0, _hello.sayHelloAsyncRequest)(), (0, _hello.sayHelloAsyncFailure)()]);
  });
});
test('sayHelloAsync data error', () => {
  _fetchMock.default.get((0, _routes.helloEndpointRoute)(666), {});

  const store = mockStore();
  return store.dispatch((0, _hello.sayHelloAsync)(666)).then(() => {
    expect(store.getActions()).toEqual([(0, _hello.sayHelloAsyncRequest)(), (0, _hello.sayHelloAsyncFailure)()]);
  });
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mockStore, "mockStore", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/action/hello.test.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();