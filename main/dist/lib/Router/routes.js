"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.renderRoute = void 0;
var _about = _interopRequireDefault(require("../../../views/about.js"));
var _home = _interopRequireDefault(require("../../../views/home.js"));
var _whoWeAre = _interopRequireDefault(require("../../../views/who-we-are.js"));
var _login = _interopRequireDefault(require("../../../views/login.js"));
var _uiLib = _interopRequireDefault(require("../../../views/ui-lib.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var routes = {
  home: _home["default"],
  about: _about["default"],
  whoWeAre: _whoWeAre["default"],
  login: _login["default"],
  ui_lib: _uiLib["default"]
};
var createRouter = function createRouter() {
  var state = [window.location.pathname.replace('/', 'home')];
  var goTo = function goTo(path) {
    state.push(path);
    window.history.pushState({
      path: path
    }, '', "/".concat(path));
  };
  var goBack = function goBack() {
    if (state.length === 1) {
      return;
    }
    state.pop();
    window.history.back();
  };
  var currentRoute = function currentRoute() {
    return state.at(-1);
  };
  window.addEventListener('popstate', function () {
    state = [window.location.pathname.replace('/', '')];
  });
  return {
    goTo: goTo,
    goBack: goBack,
    currentRoute: currentRoute
  };
};
var router = exports.router = createRouter();
var renderRoute = exports.renderRoute = function renderRoute() {
  var _routes$currentRoute;
  var appDiv = document.querySelector('#app');
  var currentRoute = router.currentRoute();
  var component = (_routes$currentRoute = routes[currentRoute]) === null || _routes$currentRoute === void 0 ? void 0 : _routes$currentRoute.call(routes);
  if (!component) {
    return appDiv.replaceChildren('404 not found');
  }
  appDiv.replaceChildren(component);
};