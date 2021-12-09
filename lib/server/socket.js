"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = require("../shared/config");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = io => {
  io.on(_config.IO_CONNECT, socket => {
    console.log('[socket.io] Client connected!');
    socket.on(_config.IO_CLIENT_JOIN_ROOM, room => {
      socket.join(room);
      console.log(`[socket.io] Client joined room ${room}!`);
      io.emit(_config.IO_SERVER_HELLO, 'Hello everyone from server!'); // all clients

      io.to(room).emit(_config.IO_SERVER_HELLO, `Hello clients from room ${room}!`); // only clients in this room

      socket.emit(_config.IO_SERVER_HELLO, 'Hello you!'); // only this client
    });
    socket.on(_config.IO_CLIENT_HELLO, message => {
      console.log(`[socket.io] Client said: ${message}`);
    });
    socket.on(_config.IO_DISCONNECT, () => {
      console.log('[socket.io] Client disconnected!');
    });
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

  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/socket.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();