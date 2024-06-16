import { LitElement, css } from "lit";
import { html } from "lit-html";

export class MyPanel extends LitElement {
  static properties() {
    title: "Home Sweet Home";
  }

  static styles = css`
    .title {
      background: var(--my-panel-primary-bg, black);
      color: var(--my-panel-primary-color, yellow);
      padding: 0.8rem;
      border: 1px solid yellow;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .body {
      background: aquamarine;
      color: blue;
      padding: 1rem;
      border: 1px solid red;
    }
  `;

  constructor() {
    super();
    // this.title = "Home Sweet Home";
  }

  render() {
    return html`
      <div>
        <div class="title">
          ${this.title}
          <div>🖕</div>
        </div>
        <div class="body">
          <slot> </slot>
        </div>
      </div>
    `;
  }
}

customElements.define("my-panel", MyPanel);
