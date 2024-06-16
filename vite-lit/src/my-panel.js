import { LitElement, html, css } from 'lit'

export class MyPanel extends LitElement {

    static styles = css`
        .title {
            background: black;
            color: yellow;
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
    `

    render() {
        return html`
            <div>
                <div class="title">
                    Fuck you!
                    <div>🖕</div>
                </div>
                <div class="body">
                    CONTENT HERE
                </div>
            </div>
        `
    }
}

customElements.define('my-panel', MyPanel)
