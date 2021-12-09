"use strict";

var _routes = require("./routes");

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

test('helloEndpointRoute', () => {
  expect((0, _routes.helloEndpointRoute)()).toBe('/ajax/hello/:num');
  expect((0, _routes.helloEndpointRoute)(2)).toBe('/ajax/hello/2');
});