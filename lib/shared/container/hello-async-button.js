"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _hello = require("../action/hello");

var _button = _interopRequireDefault(require("../components/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234'
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch((0, _hello.sayHelloAsync)(1234))
});

const _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_button.default);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/container/hello-async-button.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/container/hello-async-button.js");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/container/hello-async-button.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();