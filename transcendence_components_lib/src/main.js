// import { LoginForm } from './components/Login_Form/LoginForm.js'
import { SignUpForm } from './components/index.js'
import { LoginForm, LoginForm2 } from './components/index.js'


const app = document.getElementById('app');

/*             Login                  */
const loginForm = new LoginForm(app);
loginForm.renderForm();

const loginForm2 = new LoginForm2(app);
// loginForm2.renderForm();


/*             SignUp                 */
const signUpForm = new SignUpForm(app);
// signUpForm.renderForm();
