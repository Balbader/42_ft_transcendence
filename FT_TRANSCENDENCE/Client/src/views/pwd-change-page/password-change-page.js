import "../../components/password/password-change-component.js";
import { LitElement, html, css } from "lit";

export class PasswordChangePage extends LitElement {
  render() {
    return html` <password-change-component></password-change-component> `;
  }
}
customElements.define("password-change-page", PasswordChangePage);
