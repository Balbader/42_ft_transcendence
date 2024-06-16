"use strict";

var _dom = _interopRequireDefault(require("./tools/dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**@jsx dom */

var element = (0, _dom["default"])("div", null, (0, _dom["default"])("div", null, (0, _dom["default"])("h1", null, "Hello from div prop"), (0, _dom["default"])("button", {
  "class": "btn btn-primary"
}, "Click Me")));
var appDiv = document.getElementById("app");
appDiv.appendChild(element);
console.log(appDiv);