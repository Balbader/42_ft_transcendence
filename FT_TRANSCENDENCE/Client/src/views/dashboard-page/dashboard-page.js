import { LitElement, html, css } from "lit";

export class DashboardPage extends LitElement {
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
    return html``;
  }
}
customElements.define("dashboard-page", DashboardPage);
