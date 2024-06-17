import createElement from "../src/tools/create-element.js";
import "./my-element/my-element.js";
import "./components/nav-bar/nav-bar-out.js";
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
    return html` <nav-bar-out></nav-bar-out> `;
  }
}
window.customElements.define("my-index", MyIndex);
