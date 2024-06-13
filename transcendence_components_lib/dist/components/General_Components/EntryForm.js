"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var EntryForm = /*#__PURE__*/function () {
  function EntryForm(container) {
    _classCallCheck(this, EntryForm);
    this.container = container;
  }
  return _createClass(EntryForm, [{
    key: "renderForm",
    value: function renderForm() {
      this.container.innerHTML = "\n      <ul class=\"nav nav-tabs\" id=\"formTab\" role=\"tablist\">\n        <li class=\"nav-item\"> <a class=\"nav-link active\" id=\"login-tab\" data-toggle=\"tab\" href=\"#login\" role=\"tab\" aria-controls=\"login\" aria-selected=\"true\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"signup-tab\" data-toggle=\"tab\" href=\"#signup\" role=\"tab\" aria-controls=\"signup\" aria-selected=\"false\">Signup</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\" id=\"formTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"login\" role=\"tabpanel\" aria-labelledby=\"login-tab\">\n          ".concat(this.getLoginForm(), "\n        </div>\n        <div class=\"tab-pane fade\" id=\"signup\" role=\"tabpanel\" aria-labelledby=\"signup-tab\">\n          ").concat(this.getSignupForm(), "\n        </div>\n      </div>\n    ");
      this.addEventListeners();
    }
  }, {
    key: "getLoginForm",
    value: function getLoginForm() {
      return "\n      <form id=\"loginForm\" class=\"mt-3\">\n        <div class=\"form-group\">\n          <label for=\"loginEmail\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"loginEmail\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"loginPassword\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"loginPassword\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </form>\n    ";
    }
  }, {
    key: "getSignupForm",
    value: function getSignupForm() {
      return "\n      <form id=\"signupForm\" class=\"mt-3\">\n        <div class=\"form-group\">\n          <label for=\"signupName\">Full Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"signupName\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"signupEmail\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"signupEmail\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"signupPassword\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"signupPassword\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Signup</button>\n      </form>\n    ";
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      document.getElementById('loginForm').addEventListener('submit', this.handleLogin);
      document.getElementById('signupForm').addEventListener('submit', this.handleSignup);
    }
  }, {
    key: "handleLogin",
    value: function handleLogin(event) {
      event.preventDefault();
      var email = document.getElementById('loginEmail').value;
      var password = document.getElementById('loginPassword').value;
      console.log("Login attempted with email: ".concat(email, " and password: ").concat(password));
      // Add login logic here
    }
  }, {
    key: "handleSignup",
    value: function handleSignup(event) {
      event.preventDefault();
      var name = document.getElementById('signupName').value;
      var email = document.getElementById('signupEmail').value;
      var password = document.getElementById('signupPassword').value;
      console.log("Signup attempted with name: ".concat(name, ", email: ").concat(email, " and password: ").concat(password));
      // Add signup logic here
    }
  }]);
}();
var _default = exports["default"] = EntryForm;