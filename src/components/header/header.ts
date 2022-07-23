import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

import { globalStyles } from "../global-styles";

@customElement('stlzd-header')
export class StlzdHeader extends LitElement {
    static styles = [
        globalStyles,
        css`
            header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 0 20px;
                height: 60px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                width: 100vw;
                box-sizing: border-box;
                z-index: 1;
            }
        `
    ];

    render() {
        return html`
            <header>
                <slot></slot>
            </header>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'stlzd-header': StlzdHeader;
    }
}