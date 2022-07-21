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

    render() {
        switch (this.type) {
            case AlertVariants.INFO:
                return html`
                    <div class="alert-box">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-info-circle" width="19" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            <polyline points="11 12 12 12 12 16 13 16"></polyline>
                        </svg>
                        <slot></slot>
                    </div>`;
            case AlertVariants.ERROR:
                return html`
                <div class="alert-box">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-urgent" width="19" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 16v-4a4 4 0 0 1 8 0v4"></path>
                        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"></path>
                        <rect x="6" y="16" width="12" height="4" rx="1"></rect>
                    </svg>
                    <slot></slot>
                </div>`;
            case AlertVariants.SUCCESS:
                return html`
                <div class="alert-box">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check" width="19" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M9 12l2 2l4 -4"></path>
                    </svg>
                    <slot></slot>
                </div>`;
            case AlertVariants.WARNING:
                return html`
                <div class="alert-box">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle" width="19" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 9v2m0 4v.01"></path>
                        <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
                    </svg>
                    <slot></slot>
                </div>`;
    }

    return html`<p>Alert type not specified or doesn't exist</p>`;
}

declare global {
    interface HTMLElementTagNameMap {
        "stlzd-alert": StlzdAlert;
    }
}