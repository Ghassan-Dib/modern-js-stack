"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePage = exports.helloPage = exports.helloEndpoint = exports.helloAsyncPage = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const homePage = () => null;

exports.homePage = homePage;

const helloPage = () => ({
  hello: {
    message: 'Server side preloaded message'
  }
});

exports.helloPage = helloPage;

const helloAsyncPage = () => ({
  hello: {
    messageAsync: 'Server side preloaded message for async page'
  }
});

exports.helloAsyncPage = helloAsyncPage;

const helloEndpoint = num => ({
  serverMessage: `Hello from server! (received num = ${num})`
});

exports.helloEndpoint = helloEndpoint;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(homePage, "homePage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/controller.js");
  reactHotLoader.register(helloPage, "helloPage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/controller.js");
  reactHotLoader.register(helloAsyncPage, "helloAsyncPage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/controller.js");
  reactHotLoader.register(helloEndpoint, "helloEndpoint", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/controller.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();