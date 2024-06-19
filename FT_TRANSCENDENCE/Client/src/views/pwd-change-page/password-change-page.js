import "../../components/nav-bar/nav-bar-in.js";
import "../../components/password/password-change-component.js";
import "../../components/footer/footer-in.js";
import { LitElement, html, css } from "lit";

export class PasswordChangePage extends LitElement {
  render() {
    return html`
      <nav-bar-in></nav-bar-in>
      <password-change-component></password-change-component>
      <footer-in></footer-in>
    `;
  }
}
customElements.define("password-change-page", PasswordChangePage);
