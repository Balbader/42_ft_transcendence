import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>This is the Dashboard page.</h1>
      <p>Not sure what is going here yet</p>
    `;
  }
}
