class SignUpForm {

    constructor(container) {
        this.container = container;
    }

    renderForm() {
        this.container.innerHTML = `
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
        this.addEventListeners();
    }


    addEventListeners() {
        document.getElementById('signupForm').addEventListener('submit', this.handleSignup);
    }

    handleSignup(event) {
        event.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        console.log(`Signup attempted with name: ${name}, email: ${email} and password: ${password}`);
        // Add signup logic here
    }
}

export default SignUpForm;
