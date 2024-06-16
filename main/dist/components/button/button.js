import { LitElement, html } from 'lit';
class myBtn extends LitElement {
  render() {
    return html`
            <div>Hello from ui_lib</div>
        `;
  }
}
customElements.define('myBtn', myBtn);