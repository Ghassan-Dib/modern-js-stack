"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactJss = require("react-jss");

var _modal = _interopRequireDefault(require("../modal"));

var _config = require("../../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const useStyles = (0, _reactJss.createUseStyles)({
  hoverMe: {
    '&:hover': {
      color: 'red'
    }
  },
  resizeMe: {
    '@media screen and (max-width: 800px)': {
      color: 'red'
    }
  },
  specialBtn: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen'
  }
});

const HomePage = () => {
  const classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
    meta: [{
      name: 'description',
      content: 'Hello App is an app to say hello'
    }, {
      property: 'og:title',
      content: _config.APP_NAME
    }]
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "jumbotron"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "display-3 mb-4"
  }, _config.APP_NAME))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 mb-4"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "mb-3"
  }, "Bootstrap"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    "data-bs-toggle": "modal",
    "data-bs-target": "#exampleModal",
    className: "btn btn-primary"
  }, "Open Modal"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 mb-4"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "mb-3"
  }, "JSS"), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.hoverMe
  }, "Hover me!"), /*#__PURE__*/_react.default.createElement("p", {
    className: classes.resizeMe
  }, "Resize the window!"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: classes.specialBtn
  }, "Composition")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 mb-4"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "mb-3"
  }, "Websockets"), /*#__PURE__*/_react.default.createElement("p", null, "Open your browser console.")))), /*#__PURE__*/_react.default.createElement(_modal.default, null));
};

__signature__(HomePage, "useStyles{classes}", () => [useStyles]);

const _default = HomePage;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useStyles, "useStyles", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/home.jsx");
  reactHotLoader.register(HomePage, "HomePage", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/home.jsx");
  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/shared/components/pages/home.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();