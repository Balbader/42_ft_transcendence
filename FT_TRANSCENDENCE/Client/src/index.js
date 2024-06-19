import "./views/signup-page/sign-up-page.js";
import "./views/login-page/login-page.js";
import "./views/profile-page/profile-page.js";
import "./views/settings-page/settings-page.js";
import "./views/pwd-change-page/password-change-page.js";
import "./views/dashboard-page/dashboard-page.js";
import { LitElement, html, css } from "lit";

export class MyIndex extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav-bar-out></nav-bar-out>
      <br />
      <nav-bar-in></nav-bar-in>
      <br />
      <sign-up-page></sign-up-page>
      <br />
      <login-page></login-page>
      <br />
      <profile-page></profile-page>
      <br />
      <settings-page></settings-page>
      <br />
      <password-change-page></password-change-page>
      <br />
      <dashboard-page></dashboard-page>
      <br />
      <footer-out></footer-out>
    `;
  }
}
window.customElements.define("my-index", MyIndex);
