"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var whoWeAre = function whoWeAre() {
  var div = document.createElement('div');
  var hello = /*#__PURE__*/React.createElement("p", null, "hello from the whoWeAre page.");
  div.appendChild(hello);
  return div;
};
var _default = exports["default"] = whoWeAre;