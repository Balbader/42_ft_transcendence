"use strict";

var _index = require("./components/index.js");
// import { LoginForm } from './components/Login_Form/LoginForm.js'

var app = document.getElementById('app');

/*             Login                  */
var loginForm = new _index.LoginForm(app);
loginForm.renderForm();

/*             SignUp                 */
var signUpForm = new _index.SignUpForm(app);
// signUpForm.renderForm();