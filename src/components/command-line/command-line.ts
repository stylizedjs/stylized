import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { globalStyles } from "../global-styles";

@customElement('stlzd-command-line')
export class StlzdCommandLine extends LitElement {
    static styles = [
        globalStyles,
        css`
            pre {
                background-color: #F1F1F1;
                color: var(--_black-color);

                display: flex;
                flex-direction: row;
            }

            .bash-signal {
                color: #9A9A9A;
                margin-right: 5px;
            }

            svg {
                margin-left: 25px;
                cursor: pointer;
            }
        `
    ];

    @property()
    lineContent: string = "Nothing inserted to copy.";

    render() {
        return html`
                <pre>
                    <p class="bash-signal unselectable">$</p> 
                    <slot>${this.lineContent}</slot>

                    <svg style="width:19px;height:19px" viewBox="0 0 24 24">
                        <path fill="#b7b7b7" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
                    </svg>
                </pre>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-command-line": StlzdCommandLine;
    }
}