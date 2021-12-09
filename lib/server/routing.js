"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("./controller");

var _routes = require("../shared/routes");

var _renderApp = _interopRequireDefault(require("./render-app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

const _default = app => {
  app.get(_routes.HOME_PAGE_ROUTE, (req, res) => {
    res.send((0, _renderApp.default)(req.url, (0, _controller.homePage)()));
  });
  app.get(_routes.HELLO_PAGE_ROUTE, (req, res) => {
    res.send((0, _renderApp.default)(req.url, (0, _controller.helloPage)()));
  });
  app.get(_routes.HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send((0, _renderApp.default)(req.url, (0, _controller.helloAsyncPage)()));
  });
  app.get((0, _routes.helloEndpointRoute)(), (req, res) => {
    res.json((0, _controller.helloEndpoint)(req.params.num));
  });
  app.get('/500', () => {
    throw new Error('Fake Internal Server Error');
  });
  app.get('*', (req, res) => {
    res.status(404).send((0, _renderApp.default)(req.url));
  });
  app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
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

  reactHotLoader.register(_default, "default", "/Users/ghassan/Desktop/postlight training/training/step-by-step-modern-js-stack/src/server/routing.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();