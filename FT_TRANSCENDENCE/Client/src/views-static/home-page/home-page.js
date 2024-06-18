import "../signup-page/sign-up-page.js";
import "../login-page/login-page.js";
import "../profile-page/profile-page.js";
import "../../components/footer/footer-out.js";
import "../../components/nav-bar/nav-bar-in.js";
import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
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
      <nav-bar-out></nav-bar-out>
      <nav-bar-in></nav-bar-in>
      <sign-up-page></sign-up-page>
      <login-page></login-page>
      <profile-page></profile-page>
      <footer-out></footer-out>
    `;
  }
}
customElements.define("home-page", HomePage);
