import { SignUpForm, LoginForm } from './components/index.js';

const app = document.querySelector('#app');

/*             Login                  */
const loginForm = new LoginForm(app);
loginForm.renderForm();

/*             SignUp                 */
const signUpForm = new SignUpForm(app);
// SignUpForm.renderForm();
