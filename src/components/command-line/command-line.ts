import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { globalStyles } from "../global-styles";

@customElement('stlzd-command-line')
export class StlzdCommandLine extends LitElement {
    static styles = [
        globalStyles,
        css`
            :host {
                display: flex;
            }

            :host div {
                background-color: var(--command-line-background-color, #f1f1f1);
                padding: 15px 20px;
                border-radius: 6px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            svg path {
                fill: #b7b7b7;
                transition: fill .4s ease;
            }

            svg {
                margin-left: 25px;
                cursor: pointer;
            }

            svg:hover path {
                fill: #9d9d9d;
            }

            .bash-signal {
                color: #9A9A9A;
                margin-right: 5px;
            }
        `
    ];

    @property()
    command: string = "Nothing inserted to copy.";

    render() {
        return html`
                <div>
                    <p class="bash-signal unselectable">$</p> 
                    <slot>${this.command}</slot>

                    <svg @click=${() => { navigator.clipboard.writeText(this.command) }} style="width:19px;height:19px" viewBox="0 0 24 24">
                        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
                    </svg>
                </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-command-line": StlzdCommandLine;
    }
}