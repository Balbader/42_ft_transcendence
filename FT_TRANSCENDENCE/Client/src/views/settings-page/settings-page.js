import { LitElement, html, css } from "lit";

export class SettingsPage extends LitElement {
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
                      <h5 class="mb-3">Settings</h5>
                      <form action="#!" class="row gy-3 gy-xxl-4">
                        <div class="col-12">
                          <div class="row gy-2 pt-4">
                            <label class="col-12 form-label m-0"
                              >Profile Image</label
                            >
                            <div class="col-12">
                              <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                class="img-fluid"
                                alt="Profile Picture"
                              />
                            </div>
                            <!-- !fix upload and delete img icons not showing up -->
                            <div class="col-12">
                              <a href="#!">
                                <svg
                                  class="bi bi-exclamation-triangle text-success"
                                  width="32"
                                  height="32"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  ...
                                </svg>
                              </a>
                              <a href="#!" class="material-icons"> </a>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputFirstName" class="form-label"
                            >First Name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            value="Ethan"
                          />
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputLastName" class="form-label"
                            >Last Name</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="inputLastName"
                            value="Leo"
                          />
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputFirstName" class="form-label"
                            >Date Of Birth</label
                          >
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            value="DD/MM/YYYY"
                          />
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputPhone" class="form-label"
                            >Phone</label
                          >
                          <input
                            type="tel"
                            class="form-control"
                            id="inputPhone"
                            value="+33 6 12 34 56 78"
                          />
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputEmail" class="form-label"
                            >Email</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            value="leo@example.com"
                          />
                        </div>

                        <div class="col-12 col-md-6">
                          <label for="inputEmail" class="form-label"
                            >Confirm Email</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail"
                            value="leo@example.com"
                          />
                        </div>

                        <div class="col-12">
                          <button type="submit" class="btn btn-primary">
                            Save Changes
                          </button>
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
customElements.define("settings-page", SettingsPage);
