import { css, html, LitElement } from "lit";
import { customElement, property } from 'lit/decorators.js';

import { globalStyles } from "../globalStyles";

export enum ButtonVariants {
    PRIMARY = 'primary',
    BASIC = 'basic',
}

@customElement('stlzd-button')
export class StlzdButton extends LitElement {
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

            :host([type="basic"]) {
                background-color: transparent;
                color: var(--primary-color);
            }

            :host([type="basic"]:hover) {
                background-color: var(--lavender-blue-transparent-color);
            }

            :host([type="basic"]:active) {
                background-color: var(--lavender-blue-transparent-color);
            }
        `
    ];

    @property()
    type?: ButtonVariants = ButtonVariants.PRIMARY;

    render() {
        return html`<button></button>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-button": StlzdButton;
    }
}