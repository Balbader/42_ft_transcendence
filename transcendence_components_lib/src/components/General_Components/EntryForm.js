class EntryForm {
	constructor(container) {
		this.container = container;
	}

	renderForm() {
		this.container.innerHTML = `
      <ul class="nav nav-tabs" id="formTab" role="tablist">
        <li class="nav-item"> <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Signup</a>
        </li>
      </ul>
      <div class="tab-content" id="formTabContent">
        <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
          ${this.getLoginForm()}
        </div>
        <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
          ${this.getSignupForm()}
        </div>
      </div>
    `;
		this.addEventListeners();
	}

	getLoginForm() {
		return `
      <form id="loginForm" class="mt-3">
        <div class="form-group">
          <label for="loginEmail">Email address</label>
          <input type="email" class="form-control" id="loginEmail" required>
        </div>
        <div class="form-group">
          <label for="loginPassword">Password</label>
          <input type="password" class="form-control" id="loginPassword" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    `;
	}

	getSignupForm() {
		return `
      <form id="signupForm" class="mt-3">
        <div class="form-group">
          <label for="signupName">Full Name</label>
          <input type="text" class="form-control" id="signupName" required>
        </div>
        <div class="form-group">
          <label for="signupEmail">Email address</label>
          <input type="email" class="form-control" id="signupEmail" required>
        </div>
        <div class="form-group">
          <label for="signupPassword">Password</label>
          <input type="password" class="form-control" id="signupPassword" required>
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
    `;
	}

	addEventListeners() {
		document.querySelector('#loginForm').addEventListener('submit', this.handleLogin);
		document.querySelector('#signupForm').addEventListener('submit', this.handleSignup);
	}

	handleLogin(event) {
		event.preventDefault();
		const email = document.querySelector('#loginEmail').value;
		const password = document.querySelector('#loginPassword').value;
		console.log(`Login attempted with email: ${email} and password: ${password}`);
		// Add login logic here
	}

	handleSignup(event) {
		event.preventDefault();
		const name = document.querySelector('#signupName').value;
		const email = document.querySelector('#signupEmail').value;
		const password = document.querySelector('#signupPassword').value;
		console.log(`Signup attempted with name: ${name}, email: ${email} and password: ${password}`);
		// Add signup logic here
	}
}

export default EntryForm;
