import { css, html, LitElement } from "lit";
import { customElement } from 'lit/decorators.js';
import { globalStyles } from "../globalStyles";

@customElement("button")
export class Button extends LitElement {
    static styles = [
        globalStyles,
        css`
            :host {
                background-color: var(--primary-color);
                color: var(--white-color);
                border-radius: 4px;
                font-family: "Inter", sans-serif;
                font-size: 15px;
                cursor: pointer;
                outline: none;
                border: none;
                padding: 7px 20px;
                transition: all 0.4s ease;
            }

            :host:hover {
                background-color: var(--primary-hovered-color);
            }

            :host:active {
                background-color: var(--primary-active-color);
            }
        `
    ];

    render() {
        return html`<button></button>`;
    }
}