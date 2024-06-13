// import { LoginForm } from './components/Login_Form/LoginForm.js'
import { SignUpForm } from './components/index.js'
import { LoginForm } from './components/index.js'


const app = document.getElementById('app');

/*             Login                  */
const loginForm = new LoginForm(app);
loginForm.renderForm();


/*             SignUp                 */
const signUpForm = new SignUpForm(app);
// signUpForm.renderForm();
