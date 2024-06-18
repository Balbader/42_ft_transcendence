import "./components/nav-bar/nav-bar-out.js";
import "./views-static/home-page.js";
import { LitElement, html, css } from "lit";

export class MyIndex extends LitElement {
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
    return html` <home-page></home-page> `;
  }
}
window.customElements.define("my-index", MyIndex);
