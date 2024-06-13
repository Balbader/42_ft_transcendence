class LoginForm {

    constructor(container) {
        this.container = container;
    }

    renderForm() {
        this.container.innerHTML = `
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
        this.addEventListeners();
    }

    addEventListeners() {
        document.getElementById('loginForm').addEventListener('submit', this.handleLogin);
    }

    handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log(`Login attempted with email: ${email} and password: ${password}`);
        // Add login logic here
    }
}

export default LoginForm;
