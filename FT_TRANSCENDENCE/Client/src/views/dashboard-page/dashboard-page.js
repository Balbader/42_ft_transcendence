import { LitElement, html, css } from "lit";

export class DashboardPage extends LitElement {
  static get styles() {
    const { cssRules } = document.styleSheets[0];

    const globalStyle = css([
      Object.values(cssRules)
        .map((rule) => rule.cssText)
        .join("\n"),
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
                <div class="card-body p-4">
                  <div class="tab-content pt-4" id="profileTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="overview-tab-pane"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                      tabindex="0"
                    >
                      <h5 class="mb-3">Dashboard</h5>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="profile-tab-pane"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabindex="0"
                    ></div>
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
                                        >Ethan Leo</span
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
                                        >Ethan Leo</span
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
customElements.define("dashboard-page", DashboardPage);
