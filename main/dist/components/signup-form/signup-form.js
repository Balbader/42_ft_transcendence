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
var SignUpForm = /*#__PURE__*/function () {
  function SignUpForm(container) {
    _classCallCheck(this, SignUpForm);
    this.container = container;
  }
  return _createClass(SignUpForm, [{
    key: "renderForm",
    value: function renderForm() {
      this.container.innerHTML = "\n          <section id=\"signupForm\" class=\"vh-100 gradient-custom\">\n            <div class=\"container py-5 h-100\">\n              <div class=\"row d-flex justify-content-center align-items-center h-100\">\n                <div class=\"col-12 col-md-8 col-lg-6 col-xl-5\">\n                  <div class=\"card bg-dark text-white\" style=\"border-radius: 1rem;\">\n                    <div class=\"card-body p-5 text-center\">\n                      <div class=\"mb-md-5 mt-md-4 pb-5\">\n                        <h2 class=\"fw-bold mb-2 text-uppercase\">SignUp</h2>\n                        <p class=\"text-white-50 mb-5\">Please enter your login and password!</p>\n\n                        <!--NOTE: Name Field -->\n                        <div data-mdb-input-init class=\"form-outline form-white mb-4\">\n                          <input type=\"email\" id=\"signupName\" class=\"form-control form-control-lg\" />\n                          <label class=\"form-label\" for=\"\">Name</label>\n                        </div>\n\n                        <!--NOTE: Email Field -->\n                        <div data-mdb-input-init class=\"form-outline form-white mb-4\">\n                          <input type=\"email\" id=\"signupEmail\" class=\"form-control form-control-lg\" />\n                          <label class=\"form-label\" for=\"\">Email</label>\n                        </div>\n\n                        <!--NOTE: Password Field -->\n                        <div data-mdb-input-init class=\"form-outline form-white mb-4\">\n                          <input id=\"signupPassword\" type=\"password\" id=\"typePasswordX\" class=\"form-control form-control-lg\" />\n                          <label class=\"form-label\" for=\"\">Password</label>\n                        </div>\n\n                        <!--NOTE: Signup Btn -->\n                        <button data-mdb-button-init data-mdb-ripple-init class=\"btn btn-outline-light btn-lg px-5\" type=\"submit\">SignUp</button>\n\n                        <!--NOTE: SignUp with 42 btn -->\n                        <button data-mdb-button-init data-mdb-ripple-init class=\"btn btn-outline-light btn-lg px-5\" type=\"submit\">SignUp with 42</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </section>\n        ";
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      document.querySelector('#signupForm').addEventListener('submit', this.handleSignup);
    }
  }, {
    key: "handleSignup",
    value: function handleSignup(event) {
      event.preventDefault();
      var name = document.querySelector('#signupName').value;
      var email = document.querySelector('#signupEmail').value;
      var password = document.querySelector('#signupPassword').value;
      console.log("Signup attempted with name: ".concat(name, ", email: ").concat(email, " and password: ").concat(password));
      // Add signup logic here
    }
  }]);
}();
var _default = exports["default"] = SignUpForm;