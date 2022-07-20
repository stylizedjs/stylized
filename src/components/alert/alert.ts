import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { globalStyles } from "../global-styles";

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
            .alert-box {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--_alert-standard-bg-color);
                color: var(--_primary-color);
                border: 1px solid var(--_alert-border-bg-color);
                border-radius: 6px;
            }

            :host([type="success"]) .alert-box {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--_alert-success-bg-color);
                color: var(--_alert-success-text);
                border: 1px solid var(--_alert-success-border-color);
                border-radius: 6px;
            }

            :host([type="error"]) .alert-box {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--_alert-danger-bg-color);
                color: var(--_alert-danger-text);
                border: 1px solid var(--_alert-danger-border-color);
                border-radius: 6px;
            }

            :host([type="warning"]) .alert-box {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--_alert-warning-bg-color);
                color: var(--_alert-warning-text-color);
                border: 1px solid var(--_alert-warning-border-color);
                border-radius: 6px;
            }
        `
    ];

    @property()
    type: AlertVariants;

    render() {
        return html`<div class="alert-box"><slot></slot></div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-alert": StlzdAlert;
    }
}