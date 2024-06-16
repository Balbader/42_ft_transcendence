"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ky = _interopRequireDefault(require("https://esm.sh/ky@1"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var rest = _ky["default"].create({
  prefixUrl: 'https://jsonplaceholder.typicode.com/'
});
var _default = exports["default"] = rest;