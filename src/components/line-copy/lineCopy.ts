import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

import { globalStyles } from "../globalStyles";

@customElement('stlzd-line-copy')
export class StlzdLineCopy extends LitElement {
    static styles = [
        globalStyles,
        css``
    ];

    @property()
    lineContent: string = "Nothing inserted to copy.";

    render() {
        return html`
            <div>
                <pre>${this.lineContent}</pre>
                <button @click=${() => navigator.clipboard.writeText(this.lineContent)}>
                    Copy
                </button>
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-line-copy": StlzdLineCopy;
    }
}