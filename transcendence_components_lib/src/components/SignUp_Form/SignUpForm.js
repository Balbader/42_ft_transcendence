class SignUpForm {

    constructor(container) {
        this.container = container;
    }

    renderForm() {
        this.container.innerHTML = `
            <section id="signupForm" class="vh-100 gradient-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" style="border-radius: 1rem;">
                                <div class="card-body p-5 text-center">
                                    <div class="mb-md-5 mt-md-4 pb-5">
                                        <h2 class="fw-bold mb-2 text-uppercase">SignUp</h2>
                                        <p class="text-white-50 mb-5">Please enter your login and password!</p>

                                        <!--NOTE: Name Field -->
                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <input type="email" id="signupName" class="form-control form-control-lg" />
                                            <label class="form-label" for="">Name</label>
                                        </div>

                                        <!--NOTE: Email Field -->
                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <input type="email" id="signupEmail" class="form-control form-control-lg" />
                                            <label class="form-label" for="">Email</label>
                                        </div>

                                        <!--NOTE: Password Field -->
                                        <div data-mdb-input-init class="form-outline form-white mb-4">
                                            <input id="signupPassword" type="password" id="typePasswordX" class="form-control form-control-lg" />
                                            <label class="form-label" for="">Password</label>
                                        </div>

                                        <!-- Submit Btn -->
                                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5" type="submit">SignUp</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
