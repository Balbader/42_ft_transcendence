import "./sign-up-page.js";
import "../components/footer/footer-out.js";
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

  render() {
    return html`
      <nav-bar-out></nav-bar-out>
      <sign-up-page></sign-up-page>
      <footer-out></footer-out>
    `;
  }
}
customElements.define("home-page", HomePage);
