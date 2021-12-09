"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _helloButton = _interopRequireDefault(require("../../container/hello-button"));

var _message = _interopRequireDefault(require("../../container/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const title = 'Hello Page';

const HelloPage = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "container mt-4"
}, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
  title: title,
  meta: [{
    name: 'description',
    content: 'A page to say hello'
  }, {
    property: 'og:title',
    content: title
  }]
}), /*#__PURE__*/_react.default.createElement("div", {
  className: "row"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "col-12"
}, /*#__PURE__*/_react.default.createElement("h1", null, title), /*#__PURE__*/_react.default.createElement(_message.default, null), /*#__PURE__*/_react.default.createElement(_helloButton.default, null))));

const _default = HelloPage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(title, "title", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/hello.jsx");
  reactHotLoader.register(HelloPage, "HelloPage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/hello.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/hello.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();