"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

var _config = require("../shared/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const socket = (0, _socket.default)(window.location.host);

const _default = store => {
  socket.on(_config.IO_CONNECT, () => {
    console.log(store, window.location);
    console.log('[socket.io] Connected!');
    socket.emit(_config.IO_CLIENT_JOIN_ROOM, 'hello-1234');
    socket.emit(_config.IO_CLIENT_HELLO, 'Hello!');
  });
  socket.on(_config.IO_SERVER_HELLO, message => {
    console.log(`[socket.io] Server: ${message}!`);
  });
  socket.on(_config.IO_DISCONNECT, () => {
    console.log('[socket.io] Disconnected!');
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(socket, "socket", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/socket.js");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/client/socket.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();