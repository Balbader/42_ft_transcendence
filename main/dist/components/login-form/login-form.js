"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginForm = exports.label = exports.input = exports.button = void 0;
var _createElement = require("../../lib/create-element.js");
var button = exports.button = function button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
    text = _ref.text;
  (0, _createElement.createElement)('button', {
    "class": "btn btn-".concat(variant)
  }).appendText(text);
};
var label = exports.label = function label(_ref2) {
  var className = _ref2.className,
    text = _ref2.text;
  (0, _createElement.createElement)('label', {
    "class": "form-label ".concat(className)
  }).appendText(text);
};
var input = exports.input = function input(_ref3) {
  var value = _ref3.value,
    type = _ref3.type,
    className = _ref3.className,
    placeholder = _ref3.placeholder,
    label = _ref3.label,
    _ref3$required = _ref3.required,
    required = _ref3$required === void 0 ? true : _ref3$required;
  (0, _createElement.createElement)('input', {
    value: value,
    type: type,
    "class": "form-control form-control-l ".concat(className),
    placeholder: placeholder,
    label: label,
    required: required
  });
};
var email = function email() {
  (0, _createElement.createElement)('div', {
    "class": 'form-group'
  }, label({
    text: 'your email'
  }), input({
    placeholder: 'enter your email',
    label: 'email',
    value: '',
    type: 'email'
  }));
};
var password = function password() {
  (0, _createElement.createElement)('div', {
    "class": 'form-group'
  }, label({
    text: 'your password'
  }), input({
    placeholder: 'enter your password',
    label: 'password',
    value: '',
    type: 'password'
  }));
};
var loginForm = exports.loginForm = function loginForm() {
  (0, _createElement.createElement)('div', {
    "class": 'form-group'
  }, email(), password());
};

// <section id="loginForm" class="vh-100 gradient-custom">
//  <div class="container py-5 h-100">
//      <div class="row d-flex justify-content-center align-items-center h-100">
//          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//              <div class="card bg-dark text-white" style="border-radius: 1rem;">
//                  <div class="card-body p-5 text-center">
//                      <div class="mb-md-5 mt-md-4 pb-5">
//                          <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
//                          <p class="text-white-50 mb-5">Please enter your login and password!</p>
//
//                          <!--NOTE: Email Field -->
//
//                          <div data-mdb-input-init class="form-outline form-white mb-4">
//                              <input type="email" id="loginEmail" class="form-control form-control-lg" />
//                              <label class="form-label" for="">Email</label>
//                          </div>
//
//                          <!--NOTE: Password Field -->
//
//                          <div data-mdb-input-init class="form-outline form-white mb-4">
//                              <input id="loginPassword" type="password" id="typePasswordX" class="form-control form-control-lg" />
//                              <label class="form-label" for="">Password</label>
//                          </div>
//
//                          <!--NOTE: Reset Password link -->
//
//                          <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
//
//                          <!--NOTE: Login Btn -->
//
//                          <button id="btnLogin" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
//
//                          <!--NOTE: Login with 42 Btn -->
//
//                          <button id="btnFortyTwo" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">Login with 42</button>
//                      </div>
//                      <div>
//                          <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold"> Sign Up</a>
//                          </p>
//                      </div>
//                  </div>
//              </div>
//          </div>
//      </div>
//  </div>
// </section>
//