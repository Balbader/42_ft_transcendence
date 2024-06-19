import "../../components/nav-bar/nav-bar-in.js";
import "../../components/settings/settings-component.js";
import "../../components/footer/footer-in.js";
import { LitElement, html, css } from "lit";

export class SettingsPage extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <nav-bar-in></nav-bar-in>
      <settings-component></settings-component>
      <footer-in></footer-in>
    `;
  }
}
customElements.define("settings-page", SettingsPage);
