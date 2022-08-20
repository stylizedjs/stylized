import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { globalStyles } from "../global-styles";

export enum InputVariants {
    TEXT = "text",
    DATE = "date",
    PASSWORD = "password",
    TEXTAREA = "textarea",
}

@customElement('stlzd-input')
export class StlzdInput extends LitElement {
    static styles = [
        globalStyles,
        css`
            input {
                -webkit-font-smoothing: antialiased;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                box-sizing: border-box;
                outline: none;
                appearance: none;
                user-select: text;
                transition: box-shadow .1s;
                box-shadow: inset #d8d8da 0 0 0 1px,inset white 0 0 0 100px;
                border: none;
                width: 100%;
                border-radius: 10px;
                height: 45px;
                padding: 0 14px;
                font-size: 15px;
            }
            
            input:hover {
                box-shadow: inset #b6b6b6 0 0 0 1px,inset white 0 0 0 100px;
            }

            input:focus {
                box-shadow: inset var(--_primary-color) 0 0 0 1px,inset white 0 0 0 100px;
            }
        `
    ];

    @property()
    type: InputVariants = InputVariants.TEXT;

    @property()
    placeholder: string = "";

    render() {
        return html`
            <input type="${this.type}" placeholder="${this.placeholder}"></input>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-input": StlzdInput;
    }
}