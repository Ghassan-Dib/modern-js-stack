"use strict";

var _compression = _interopRequireDefault(require("compression"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _http = require("http");

var _socket = _interopRequireDefault(require("socket.io"));

var _routing = _interopRequireDefault(require("./routing"));

var _config = require("../shared/config");

var _util = require("../shared/util");

var _socket2 = _interopRequireDefault(require("./socket"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const app = (0, _express.default)();
const http = (0, _http.Server)(app);
const io = (0, _socket.default)(http);
(0, _socket2.default)(io);
app.use(_express.default.json());
app.use((0, _cors.default)({
  origin: '*'
}));
app.use((0, _compression.default)());
app.use(_config.STATIC_PATH, _express.default.static('dist'));
app.use(_config.STATIC_PATH, _express.default.static('public'));
(0, _routing.default)(app);
http.listen(_config.WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${_config.WEB_PORT} ${_util.isProd ? '(production)' : '(development).\nKeep "npm run dev:wds" running in another terminal'}.`);
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/index.js");
  reactHotLoader.register(http, "http", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/index.js");
  reactHotLoader.register(io, "io", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();