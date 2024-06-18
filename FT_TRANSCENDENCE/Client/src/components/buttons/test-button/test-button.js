import { LitElement, html, css } from "lit";

export class TestButton extends LitElement {
  // ! possible to import the following static get globally?
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
    return html` <button class="btn btn-primary ml-2">Test Btn</button> `;
  }
}
customElements.define("test-button", TestButton);
