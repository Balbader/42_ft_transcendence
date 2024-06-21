import { createElement } from '../../lib/create-element.js';
const button = ({
  variant = 'primary',
  text
}) => {
  createElement('button', {
    class: `btn btn-${variant}`
  }).appendText(text);
};
const label = ({
  className,
  text
}) => {
  createElement('label', {
    class: `form-label ${className}`
  }).appendText(text);
};
const input = ({
  value,
  type,
  className,
  placeholder,
  label,
  required = true
}) => {
  createElement('input', {
    value,
    type,
    class: `form-control form-control-l ${className}`,
    placeholder,
    label,
    required
  });
};
const email = () => {
  createElement('div', {
    class: 'form-group'
  }, label({
    text: 'your email'
  }), input({
    placeholder: 'enter your email',
    label: 'email',
    value: '',
    type: 'email'
  }));
};
const password = () => {
  createElement('div', {
    class: 'form-group'
  }, label({
    text: 'your password'
  }), input({
    placeholder: 'enter your password',
    label: 'password',
    value: '',
    type: 'password'
  }));
};
const loginForm = () => {
  createElement('div', {
    class: 'form-group'
  }, email(), password());
};
export { loginForm, input, label, button };

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