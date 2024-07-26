import { LitElement, html, css } from 'lit';

export class DashboardComponent extends LitElement {
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
									</div>
								</div>
							</div>
						</div>

						<div class="col-12 col-lg-8 col-xl-9">
							<div class="card widget-card border-light shadow-sm">
								<div class="card-body">
									<div
										class="tab-content pt-4"
										id="profileTabContent"
									>
										<div
											class="tab-pane fade show active"
											id="overview-tab-pane"
											role="tabpanel"
											aria-labelledby="overview-tab"
											tabindex="0"
										>
											<h5 class="mb-3">Let's Play Pong!</h5>
											<button
												type="submit"
												class="btn btn-primary mt-3"
											>
												Play Solo
											</button>
											<button
												type="submit"
												class="btn btn-primary mt-3"
											>
												Play With A Friend
											</button>
											<button
												type="submit"
												class="btn btn-primary mt-3"
											>
												Play Random Player
											</button>
											<button
												type="submit"
												class="btn btn-primary mt-3"
											>
												How It Works
											</button>
										</div>

										<h5 class="mb-3 pt-5">Dashboard</h5>
										<div class="container">
											<div class="row justify-content-center">
												<div class="card widget-card border-light shadow-sm">
													<div class="card-body p-4">
														<div class="table-responsive">
															<table
																class="table table-borderless bsb-table-xl text-nowrap align-middle m-0"
															>
																<thead>
																	<tr>
																		<th>Game</th>
																		<th>Date</th>
																		<th>Player 1</th>
																		<th>Score P1</th>
																		<th>Player 2</th>
																		<th>Score P2</th>
																		<th>Winner</th>
																		<th>Looser</th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<div class="d-flex align-items-center">
																				<div>
																					<h6 class="m-0">Game #1</h6>
																				</div>
																			</div>
																		</td>

																		<td>
																			<h6 class="mb-1">22/12/2021</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Ethan Leo</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">12</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">La Mere Noel</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">777</h6>
																		</td>

																		<td>
																			<span class=" btn bg-success text-light"
																				>La Mere Noel</span
																			>
																		</td>

																		<td>
																			<span class=" btn bg-danger text-light"
																				>Ethan</span
																			>
																		</td>
																	</tr>

																	<tr>
																		<td>
																			<div class="d-flex align-items-center">
																				<div>
																					<h6 class="m-0">Game #2</h6>
																				</div>
																			</div>
																		</td>

																		<td>
																			<h6 class="mb-1">22/12/2021</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Ethan Leo</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">54</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Le Chat Potte</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">125</h6>
																		</td>

																		<td>
																			<span class=" btn bg-success text-light"
																				>Le Chat Potte</span
																			>
																		</td>

																		<td>
																			<span class=" btn bg-danger text-light"
																				>Ethan</span
																			>
																		</td>
																	</tr>

																	<tr>
																		<td>
																			<div class="d-flex align-items-center">
																				<div>
																					<h6 class="m-0">Game #3</h6>
																				</div>
																			</div>
																		</td>

																		<td>
																			<h6 class="mb-1">22/12/2021</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Ethan Leo</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">32</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Sophie Lacoste</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">36</h6>
																		</td>

																		<td>
																			<span class=" btn bg-danger text-light"
																				>Ethan</span
																			>
																		</td>

																		<td>
																			<span class=" btn bg-success text-light"
																				>Sophie</span
																			>
																		</td>
																	</tr>

																	<tr>
																		<td>
																			<div class="d-flex align-items-center">
																				<div>
																					<h6 class="m-0">Game #3</h6>
																				</div>
																			</div>
																		</td>

																		<td>
																			<h6 class="mb-1">22/12/2021</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Ethan Leo</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">12</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">Shtrouphette</h6>
																		</td>

																		<td>
																			<h6 class="mb-1">12</h6>
																		</td>

																		<td>
																			<span class=" btn bg-warning text-light"
																				>Tie</span
																			>
																		</td>

																		<td>
																			<span class=" btn bg-warning text-light"
																				>Tie</span
																			>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
											<br />
											<h5 class="mb-2 pt-3">Profile</h5>
											<div class="card widget-card border-light shadow-sm">
												<div
													class="card-body p-4 widget-card row justify-content-center"
												>
													<div
														class="tab-content pt-2"
														id="profileTabContent"
													>
														<div
															class="tab-pane fade show active"
															id="overview-tab-pane"
															role="tabpanel"
															aria-labelledby="overview-tab"
															tabindex="0"
														>
															<div class="row g-0">
																<div
																	class="col-5 col-md-3 bg-light border-bottom border-white border-3"
																>
																	<div class="p-2">First Name</div>
																</div>
																<div
																	class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
																>
																	<div class="p-2">Ethan</div>
																</div>

																<div
																	class="col-5 col-md-3 bg-light border-bottom border-white border-3"
																>
																	<div class="p-2">Last Name</div>
																</div>
																<div
																	class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
																>
																	<div class="p-2">Leo</div>
																</div>

																<div
																	class="col-5 col-md-3 bg-light border-bottom border-white border-3"
																>
																	<div class="p-2">Date Of Birth</div>
																</div>
																<div
																	class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
																>
																	<div class="p-2">08/06/1932</div>
																</div>

																<div
																	class="col-5 col-md-3 bg-light border-bottom border-white border-3"
																>
																	<div class="p-2">Country</div>
																</div>
																<div
																	class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
																>
																	<div class="p-2">United States</div>
																</div>

																<div
																	class="col-5 col-md-3 bg-light border-bottom border-white border-3"
																>
																	<div class="p-2">Email</div>
																</div>
																<div
																	class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
																>
																	<div class="p-2">leo@example.com</div>
																</div>
																<div>
																	<button
																		type="button"
																		aria-current="page"
																		class="btn btn-primary mt-3"
																		href="login"
																	>
																		Update Profile Info
																	</button>
																</div>
															</div>
														</div>
														<div
															class="tab-pane fade"
															id="profile-tab-pane"
															role="tabpanel"
															aria-labelledby="profile-tab"
															tabindex="0"
														></div>
													</div>
												</div>
											</div>
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
customElements.define('dashboard-component', DashboardComponent);