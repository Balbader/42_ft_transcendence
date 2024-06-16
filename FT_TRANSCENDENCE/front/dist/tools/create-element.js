"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/** @jsx createElement */
var createElement = function createElement(tag, attributes) {
  var prop = document.createElement(tag);
  Object.keys(attributes || {}).forEach(function (key) {
    if (key === "style") {
      Object.keys(attributes[key]).forEach(function (keyStyle) {
        prop.style[keyStyle] = prop[key][keyStyle];
      });
    } else {
      prop[key] = attributes[key];
    }
  });
  var addChild = function addChild(child) {
    if (Array.isArray(child)) {
      child.forEach(function (c) {
        return addChild(c);
      });
    } else if (_typeof(child) === "object") {
      prop.appendChild(child);
    } else {
      prop.appendChild(document.createTextNode(child));
    }
  };
  prop.on = function (eventType, eventHandler, options) {
    prop.addEventListener(eventType, eventHandler, options);
    return prop;
  };
  prop.setStyle = function (styles) {
    Object.assign(element.style, styles);
    return prop;
  };
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  (children || []).forEach(function (c) {
    return addChild(c);
  });
  return prop;
};
var _default = exports["default"] = createElement;