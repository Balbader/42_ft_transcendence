"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createElement = require("../lib/create-element.js");
var whoWeAre = function whoWeAre() {
  var div = (0, _createElement.createElement)('div');
  var hello = /*#__PURE__*/React.createElement("p", null, "hello from the whoWeAre page.");
  div.appendChild(hello);
  return div;
};
var _default = exports["default"] = whoWeAre;