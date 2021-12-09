"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const Modal = () => /*#__PURE__*/_react.default.createElement("div", {
  className: "modal fade",
  id: "exampleModal",
  tabIndex: "-1",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-dialog"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-content"
}, /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-header"
}, /*#__PURE__*/_react.default.createElement("h5", {
  className: "modal-title"
}, "Modal Title"), /*#__PURE__*/_react.default.createElement("button", {
  type: "button",
  className: "close btn",
  "data-bs-dismiss": "modal"
}, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-body"
}, "This is a Bootstrap modal. It uses jQuery!"), /*#__PURE__*/_react.default.createElement("div", {
  className: "modal-footer"
}, /*#__PURE__*/_react.default.createElement("button", {
  type: "button",
  className: "btn btn-primary",
  "data-bs-dismiss": "modal"
}, "Close")))));

const _default = Modal;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Modal, "Modal", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/modal.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/modal.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();