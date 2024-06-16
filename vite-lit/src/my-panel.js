import { LitElement, html } from 'lit'

export class MyPanel extends LitElement {
    render() {
        return html`
            <div>
                Hello Lit
            </div>
        `
    }
}

customElements.define('my-panel', MyPanel)
