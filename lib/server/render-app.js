"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _server2 = require("react-router-dom/server");

var _reactRedux = require("react-redux");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactJss = require("react-jss");

var _initStore = _interopRequireDefault(require("./init-store"));

var _app = _interopRequireDefault(require("../shared/app"));

var _config = require("../shared/config");

var _util = require("../shared/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const renderApp = function (location, plainState) {
  let routerContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const store = (0, _initStore.default)(plainState);
  const sheets = new _reactJss.SheetsRegistry();

  const appHTML = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_server2.StaticRouter, {
    location: location,
    context: routerContext
  }, /*#__PURE__*/_react.default.createElement(_reactJss.JssProvider, {
    registry: sheets
  }, /*#__PURE__*/_react.default.createElement(_app.default, null)))));

  const head = _reactHelmet.default.rewind();

  return `<!doctype html>
		<html>
		<head>
			${head.title}
			${head.meta}
			<meta name=viewport content="width=device-width,initial-scale=1">
			<link rel="stylesheet" href="${_config.STATIC_PATH}/css/bootstrap.min.css"> <!-- not working so got cdn -->
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
				rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
					crossorigin="anonymous">
			<style class="${_config.JSS_SSR_CLASS}">${sheets.toString()}</style>
		</head>
		<body>
			<div class="${_config.APP_CONTAINER_CLASS}">${appHTML}</div>
			<script>
			window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
			</script>
			<script src="${_util.isProd ? _config.STATIC_PATH : `http://localhost:${_config.WDS_PORT}/dist`}/js/bundle.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
				integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
					crossorigin="anonymous"></script> <!-- jQuery cdn -->
		</body>
		</html>`;
};

const _default = renderApp;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderApp, "renderApp", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/render-app.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/render-app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();