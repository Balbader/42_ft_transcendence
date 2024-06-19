import "../../components/nav-bar/nav-bar-in.js";
import "../../components/dashboard/dashboard-component.js";
import "../../components/footer/footer-in.js";
import { LitElement, html, css } from "lit";

export class DashboardPage extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav-bar-in></nav-bar-in>
      <dashboard-component></dashboard-component>
      <footer-in></footer-in>
    `;
  }
}
customElements.define("dashboard-page", DashboardPage);
