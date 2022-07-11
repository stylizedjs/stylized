import { css, html, LitElement } from "lit";

import { globalStyles } from "@components/globalStyles";
import { customElement, property } from "lit/decorators";

export enum AlertVariants {
    INFO = 'info',
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
}

@customElement('stlzd-alert')
export class StlzdAlert extends LitElement {
    static styles = [
        globalStyles,
        css`
            :host {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--alert-standard-bg-color);
                color: var(--primary-color);
                border: 1px solid var(--alert-border-bg-color);
                border-radius: 6px;
            }

            :host([type="success"]) {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--alert-success-bg-color);
                color: var(--alert-success-text);
                border: 1px solid var(--alert-success-border-color);
                border-radius: 6px;
            }

            :host([type="error"]) {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--alert-danger-bg-color);
                color: var(--alert-danger-text);
                border: 1px solid var(--alert-danger-border-color);
                border-radius: 6px;
            }

            :host([type="warning"]) {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--alert-warning-bg-color);
                color: var(--alert-warning-text-color);
                border: 1px solid var(--alert-warning-border-color);
                border-radius: 6px;
            }
        `
    ];

    @property()
    type?: AlertVariants = AlertVariants.INFO;

    render() {
        return html`
            <div class="">
            </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-alert": StlzdAlert;
    }
}