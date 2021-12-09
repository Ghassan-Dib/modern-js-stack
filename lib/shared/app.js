"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _nav = _interopRequireDefault(require("./components/nav"));

var _home = _interopRequireDefault(require("./components/pages/home"));

var _hello = _interopRequireDefault(require("./components/pages/hello"));

var _helloAsync = _interopRequireDefault(require("./components/pages/hello-async"));

var _notFound = _interopRequireDefault(require("./components/pages/not-found"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _routes = require("./routes");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const App = () => /*#__PURE__*/_react.default.createElement("div", {
  style: {
    paddingTop: 54
  }
}, /*#__PURE__*/_react.default.createElement(_nav.default, null), /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
  titleTemplate: `%s | ${_config.APP_NAME}`,
  defaultTitle: _config.APP_NAME
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: _routes.HOME_PAGE_ROUTE,
  element: /*#__PURE__*/_react.default.createElement(_home.default, null)
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: _routes.HELLO_PAGE_ROUTE,
  element: /*#__PURE__*/_react.default.createElement(_hello.default, null)
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: _routes.HELLO_ASYNC_PAGE_ROUTE,
  element: /*#__PURE__*/_react.default.createElement(_helloAsync.default, null)
}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "*",
  element: /*#__PURE__*/_react.default.createElement(_notFound.default, null)
})), /*#__PURE__*/_react.default.createElement(_footer.default, null));

const _default = App;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/app.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();