import { LitElement, html, css } from "lit";

export class NavBarIn extends LitElement {
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
    this.imgPath = {
      path: "./src/components/nav-bar/nav-bar-assets/ping-pong (1).png",
    };
  }

  render() {
    return html`
      <nav class="bg-dark navbar navbar-expand-lg navbar-dark mt-4">
        <div class="container-fluid">
				<button
            data-mdb-collapse-init
            class="navbar-toggler"
            type="button"
              FT_TRANSCENDENCE
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"

            aria-label="Toggle navigation">
            <i class="fas fa-bars"></i
					>
					</button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-lg-2" href="home">
              <img
                src="./src/components/nav-bar/nav-bar-assets/ping-pong (1).png"
                height="60"
                width="70"
                alt="Transcendence Logo"
                loading="lazy"
                class="d-inline-block align-text-center navbar-brand"
              />
              FT_TRANSCENDENCE
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse text-bg-dark"
              id="navbarTogglerDemo02"
            >
            </div>

            <div class="d-flex align-items-center">
              <a class="link-secondary me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Settings</a>
                </li>
              </ul>
            </div>
              <div class="dropdown">
                <a
                  data-mdb-dropdown-init
                  class=" d-flex align-items-center pr-5"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    class="rounded-circle"
                    height="50"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define("nav-bar-in", NavBarIn);
