import { LitElement, html, css } from "lit";
import "../components/buttons/test-button/test-button.js";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    const { cssRules } = document.styleSheets[0];

    const globalStyle = css([
      Object.values(cssRules)
        .map((rule) => rule.cssText)
        .join("\n"),
    ]);

    return [globalStyle, css``];
  }

  static properties = {
    name: { type: String },
    count: { type: Number },
  };

  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }

  render() {
    return html`
      <h1 class="container container-fluid ml-2 mt-2">
        ${this.sayHello(this.name)}!
      </h1>
      <button
        class="btn btn-outline-dark ml-4"
        @click=${this._onClick}
        part="button"
      >
        Click Count: ${this.count}
      </button>
      <test-button></test-button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent("count-changed"));
  }

  sayHello(name) {
    return `Hello, ${name}`;
  }
}

customElements.define("my-element", MyElement);
