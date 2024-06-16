import { LitElement, css } from "lit";
import { html } from "lit-html";
export class MyPanel extends LitElement {
  static properties = {
    title: {
      type: String
    }
  };
  constructor() {
    super();
    this.title = "Main Lit";
  }
  render() {
    return html`
      <div class="title">
        <h1>${this.title}</h1>
      </div>
    `;
  }
}
customElements.define("my-panel", MyPanel);