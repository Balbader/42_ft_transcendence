import createElement from "../src/tools/create-element.js";
import "./my-element/my-element.js";
import "./components/nav-bar/nav-bar-out.js";
import { LitElement, html, css } from "lit";

export class MyIndex extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <nav-bar-out></nav-bar-out> `;
  }
}
window.customElements.define("my-index", MyIndex);

const nav = `<my-index />`;
const app = document.getElementById("app");
app.appendChild(nav);
