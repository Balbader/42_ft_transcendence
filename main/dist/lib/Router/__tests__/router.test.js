"use strict";

var _ava = _interopRequireDefault(require("ava"));
var _Router = require("../Router.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _ava["default"])('Router', function (t) {
  var myRouter = _Router.router;
  var sethRouter = _Router.router;
  t.is(myRouter.currentRoute(), 'home');
  myRouter.goTo('dashboard');
  t.is(myRouter.currentRoute(), 'dashboard');
  t.is(myRouter.currentRoute(), 'dashboard');
  t.is(sethRouter.currentRoute(), 'dashboard');
});