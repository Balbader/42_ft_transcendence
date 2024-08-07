import { LitElement, html, css } from 'lit';

export class PasswordChangeComponent extends LitElement {
	static get styles() {
		const { cssRules } = document.styleSheets[0];

		const globalStyle = css([
			Object.values(cssRules)
				.map(rule => rule.cssText)
				.join('\n'),
		]);

		return [globalStyle, css``];
	}

	constructor() {
		super();
	}
	render() {
		return html`
			<!-- Profile 1 - Bootstrap Brain Component -->
			<section class="bg-light py-3 py-md-5 py-xl-8">
				<div class="container">
					<div class="row gy-4 gy-lg-0">
						<div class="col-12 col-lg-4 col-xl-3">
							<div class="row gy-4">
								<div class="col-12">
									<div class="card widget-card border-light shadow-sm">
										<div class="card-header text-bg-dark">
											Hello, Ethan Leo!
										</div>

										<div class="card-body">
											<div class="text-center mb-3">
												<img
													src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
													class="img-fluid rounded-circle"
													alt="Luna John"
												/>
											</div>

											<h5 class="text-center mb-1">Ethan Leo</h5>

											<div class="d-grid m-0"></div>
										</div>
										renderRoute ntent">
										<div
											class="tab-pane fade show active"
											id="overview-tab-pane"
											role="tabpanel"
											aria-labelledby="overview-tab"
											tabindex="0"
										>
											<h5 class="mb-3">Password Reset</h5>
											<form action="#!">
												<div class="row gy-3 gy-xxl-4">
													<div class="col-12">
														<label
															for="currentPassword"
															class="form-label"
															>Current Password</label
														>
														<input
															type="password"
															class="form-control"
															id="currentPassword"
														/>
													</div>
													<div class="col-12">
														<label
															for="newPassword"
															class="form-label"
															>New Password</label
														>
														<input
															type="password"
															class="form-control"
															id="newPassword"
														/>
													</div>
													<div class="col-12">
														<label
															for="confirmPassword"
															class="form-label"
															>Confirm Password</label
														>
														<input
															type="password"
															class="form-control"
															id="confirmPassword"
														/>
													</div>
													<div class="col-12">
														<button
															type="submit"
															class="btn btn-primary"
														>
															Change Password
														</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}
customElements.define('password-change-component', PasswordChangeComponent);
