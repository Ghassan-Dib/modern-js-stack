"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jquery = _interopRequireDefault(require("jquery"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _routes = require("../routes");

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const handleClick = () => {
  (0, _jquery.default)('body').scrollTop(0);
  (0, _jquery.default)('.js-navbar-collapse').collapse('hide');
};

const Nav = () => /*#__PURE__*/_react.default.createElement("nav", {
  className: "navbar navbar-toggleable-md navbar-inverse fixed-top navbar-light bg-light",
  style: {
    paddingLeft: 80,
    paddingRight: 80
  }
}, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
  className: "navbar-toggler navbar-toggler-right btn",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": ".js-navbar-collapse"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "navbar-toggler-icon"
})), "\xA0 \xA0", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: _routes.HOME_PAGE_ROUTE,
  className: "navbar-brand"
}, _config.APP_NAME)), /*#__PURE__*/_react.default.createElement("div", {
  className: "js-navbar-collapse collapse navbar-collapse",
  style: {
    backroundColor: 'gray'
  }
}, /*#__PURE__*/_react.default.createElement("ul", {
  className: "navbar-nav mr-auto"
}, [{
  route: _routes.HOME_PAGE_ROUTE,
  label: 'Home'
}, {
  route: _routes.HELLO_PAGE_ROUTE,
  label: 'Say Hello'
}, {
  route: _routes.HELLO_ASYNC_PAGE_ROUTE,
  label: 'Say Hello Asynchronously'
}, {
  route: _routes.NOT_FOUND_DEMO_PAGE_ROUTE,
  label: '404 Demo'
}].map(link => /*#__PURE__*/_react.default.createElement("li", {
  className: "nav-item",
  key: link.route
}, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: link.route,
  className: "nav-link",
  activeStyle: {
    color: 'white'
  },
  onClick: handleClick
}, link.label))))));

const _default = Nav;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(handleClick, "handleClick", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/nav.jsx");
  reactHotLoader.register(Nav, "Nav", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/nav.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/nav.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();