/** @jsx dom */

import { LitElement, css } from "lit";
import { html } from "lit-html";
import { when } from "lit/directives/when.js";

export class MyPanel extends LitElement {
  static get properties() {
    return {
      title: {
        type: String,
      },
      opened: {
        type: Boolean,
      },
      icon: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.title = "Home Sweet Home";
    this.opened = false;
    this.icon = "";
  }

  onIconClickHandler(e) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent("icon-click", { bubbles: true }));
  }

  render() {
    return html`
      <div>
        <div class="title container-fluid" @click=${this._onClick}>
          ${this.title}
          <div @click=${this.onIconClickHandler}>${this.icon}</div>
        </div>

        ${when(
          this.opened,
          () => html`
            <div class="body" mr-2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </div>
            <button class="btn btn-primary">Click Me</button>
          `
        )}
      </div>
    `;
  }

  _onClick() {
    this.opened = !this.opened;
  }

  static styles = css`
    .title {
      background: black;
      color: yellow;
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
}

customElements.define("my-panel", MyPanel);
