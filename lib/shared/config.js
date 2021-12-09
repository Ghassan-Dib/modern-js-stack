"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEB_PORT = exports.WDS_PORT = exports.STATIC_PATH = exports.JSS_SSR_SELECTOR = exports.JSS_SSR_CLASS = exports.IO_SERVER_HELLO = exports.IO_DISCONNECT = exports.IO_CONNECT = exports.IO_CLIENT_JOIN_ROOM = exports.IO_CLIENT_HELLO = exports.APP_NAME = exports.APP_CONTAINER_SELECTOR = exports.APP_CONTAINER_CLASS = void 0;

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const WEB_PORT = process.env.PORT || 8000;
exports.WEB_PORT = WEB_PORT;
const STATIC_PATH = '/static';
exports.STATIC_PATH = STATIC_PATH;
const APP_NAME = 'Hello App';
exports.APP_NAME = APP_NAME;
const WDS_PORT = 7000;
exports.WDS_PORT = WDS_PORT;
const APP_CONTAINER_CLASS = 'js-app';
exports.APP_CONTAINER_CLASS = APP_CONTAINER_CLASS;
const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;
exports.APP_CONTAINER_SELECTOR = APP_CONTAINER_SELECTOR;
const IO_CONNECT = 'connect';
exports.IO_CONNECT = IO_CONNECT;
const IO_DISCONNECT = 'disconnect';
exports.IO_DISCONNECT = IO_DISCONNECT;
const IO_CLIENT_HELLO = 'IO_CLIENT_HELLO';
exports.IO_CLIENT_HELLO = IO_CLIENT_HELLO;
const IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM';
exports.IO_CLIENT_JOIN_ROOM = IO_CLIENT_JOIN_ROOM;
const IO_SERVER_HELLO = 'IO_SERVER_HELLO';
exports.IO_SERVER_HELLO = IO_SERVER_HELLO;
const JSS_SSR_CLASS = 'jss-ssr';
exports.JSS_SSR_CLASS = JSS_SSR_CLASS;
const JSS_SSR_SELECTOR = `.${JSS_SSR_CLASS}`;
exports.JSS_SSR_SELECTOR = JSS_SSR_SELECTOR;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(WEB_PORT, "WEB_PORT", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(STATIC_PATH, "STATIC_PATH", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(APP_NAME, "APP_NAME", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(WDS_PORT, "WDS_PORT", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(APP_CONTAINER_CLASS, "APP_CONTAINER_CLASS", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(APP_CONTAINER_SELECTOR, "APP_CONTAINER_SELECTOR", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(IO_CONNECT, "IO_CONNECT", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(IO_DISCONNECT, "IO_DISCONNECT", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(IO_CLIENT_HELLO, "IO_CLIENT_HELLO", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(IO_CLIENT_JOIN_ROOM, "IO_CLIENT_JOIN_ROOM", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(IO_SERVER_HELLO, "IO_SERVER_HELLO", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(JSS_SSR_CLASS, "JSS_SSR_CLASS", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
  reactHotLoader.register(JSS_SSR_SELECTOR, "JSS_SSR_SELECTOR", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/config.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();