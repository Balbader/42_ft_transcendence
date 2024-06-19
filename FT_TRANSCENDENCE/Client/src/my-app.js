import "./views/home-page/home-page.js";
import "./views/login-page/login-page.js";
import "./views/profile-page/profile-page.js";
import "./views/settings-page/settings-page.js";
import { LitElement, html, css } from "lit";

export class MyApp extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Home Page</h1>
      <home-page></home-page>
      <br />
      <h1>Login Page</h1>
      <login-page></login-page>
      <br />
      <h1>Main Profile Page</h1>
      <profile-page></profile-page>
      <br />
      <h1>User Settings Page</h1>
      <settings-page></settings-page>
    `;
  }
}
customElements.define("my-app", MyApp);
