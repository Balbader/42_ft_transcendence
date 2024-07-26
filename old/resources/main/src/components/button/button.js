import { LitElement, html, css } from 'lit';

class myBtn extends LitElement {
    render() {
        return html`
            <button>Hello from ui_lib</button>
        `;
    }
}

customElements.define('myBtn', myBtn);
