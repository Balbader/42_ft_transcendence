"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = void 0;
var _createElement = require("../lib/create-element.js");
var header = exports.header = function header() {
  var appDiv = document.querySelector('#app');
  var headerTag = (0, _createElement.createElement)('section').appendText('hello header');
  appDiv.append(headerTag);
};