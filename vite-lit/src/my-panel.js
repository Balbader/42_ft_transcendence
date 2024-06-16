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
      border: 2px solid orange;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .body {
      background: aquamarine;
      color: blue;
      padding: 1rem;
      border: 2px solid black;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  `;

  constructor() {
    super();
    this.title = "Home Sweet Home";
  }

  render() {
    return html`
      <div>
        <div class="title container-fluid">
          ${this.title}
          <div>🖕</div>
        </div>
        <div class="body" mr-2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.
        </div>
        <button class="btn btn-outline-dark">Click Me</button>
      </div>
    `;
  }
}

customElements.define("my-panel", MyPanel);
