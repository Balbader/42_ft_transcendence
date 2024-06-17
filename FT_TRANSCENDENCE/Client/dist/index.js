"use strict";

var _createElement = _interopRequireDefault(require("./tools/create-element.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/** @jsx createElement */

var app = document.getElementById("app");
var handleClick = function handleClick() {
  console.log("Button was clicked!");
};
var button = (0, _createElement["default"])("button", {
  className: "btn btn-primary"
}, "Click Me").on("click", handleClick);
app.appendChild(button);