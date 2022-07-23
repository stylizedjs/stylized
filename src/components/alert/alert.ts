import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import { globalStyles } from "../global-styles";
import { errorIcon, infoIcon, successIcon, warningIcon } from "../icons/icons";

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
                display: flex;
            }
    
            :host div {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .alert-box {
                padding: 10px 15px;
                background-color: var(--_alert-standard-bg-color);
                color: var(--_primary-color);
                border: 1px solid var(--_alert-border-bg-color);
                border-radius: 6px;
            }

            :host([type="success"]) .alert-box {
                background-color: var(--_alert-success-bg-color);
                color: var(--_alert-success-text);
                border: 1px solid var(--_alert-success-border-color);
            }

            :host([type="error"]) .alert-box {
                background-color: var(--_alert-danger-bg-color);
                color: var(--_alert-danger-text);
                border: 1px solid var(--_alert-danger-border-color);
            }

            :host([type="warning"]) .alert-box {
                background-color: var(--_alert-warning-bg-color);
                color: var(--_alert-warning-text-color);
                border: 1px solid var(--_alert-warning-border-color);
            }

            svg {
                margin-right: 15px;
            }
        `
    ];

    @property()
    type?: AlertVariants = AlertVariants.INFO;

    iconTemplate() {
        switch(this.type) {
          case AlertVariants.INFO: return infoIcon;
          case AlertVariants.ERROR: return errorIcon;
          case AlertVariants.SUCCESS: return successIcon;
          case AlertVariants.WARNING: return warningIcon;
        }
    }

    render() {
        return html`
            <div class="alert-box">
                ${this.iconTemplate()}
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-alert": StlzdAlert;
    }
}