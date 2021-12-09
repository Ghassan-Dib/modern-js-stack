"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactRouterDom = require("react-router-dom");

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const title = 'Page Not Found';

const NotFoundPage = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container mt-4"
}, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
  title: title,
  meta: [{
    name: 'description',
    content: 'A page was not found'
  }, {
    property: 'og:title',
    content: title
  }]
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "col-12"
}, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
  to: _routes.HOME_PAGE_ROUTE
}, "Go to homepage"), "."))));

const _default = NotFoundPage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(title, "title", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/not-found.jsx");
  reactHotLoader.register(NotFoundPage, "NotFoundPage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/not-found.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/not-found.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();