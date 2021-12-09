"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloEndpointRoute = exports.NOT_FOUND_DEMO_PAGE_ROUTE = exports.HOME_PAGE_ROUTE = exports.HELLO_PAGE_ROUTE = exports.HELLO_ASYNC_PAGE_ROUTE = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const HOME_PAGE_ROUTE = '/';
exports.HOME_PAGE_ROUTE = HOME_PAGE_ROUTE;
const HELLO_PAGE_ROUTE = '/hello';
exports.HELLO_PAGE_ROUTE = HELLO_PAGE_ROUTE;
const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
exports.HELLO_ASYNC_PAGE_ROUTE = HELLO_ASYNC_PAGE_ROUTE;
const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'; // eslint-disable-next-line import/prefer-default-export

exports.NOT_FOUND_DEMO_PAGE_ROUTE = NOT_FOUND_DEMO_PAGE_ROUTE;

const helloEndpointRoute = num => {
  console.log(`number = ${num}`);
  return `/ajax/hello/${num || ':num'}`;
};

exports.helloEndpointRoute = helloEndpointRoute;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HOME_PAGE_ROUTE, "HOME_PAGE_ROUTE", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/routes.js");
  reactHotLoader.register(HELLO_PAGE_ROUTE, "HELLO_PAGE_ROUTE", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/routes.js");
  reactHotLoader.register(HELLO_ASYNC_PAGE_ROUTE, "HELLO_ASYNC_PAGE_ROUTE", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/routes.js");
  reactHotLoader.register(NOT_FOUND_DEMO_PAGE_ROUTE, "NOT_FOUND_DEMO_PAGE_ROUTE", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/routes.js");
  reactHotLoader.register(helloEndpointRoute, "helloEndpointRoute", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/routes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();