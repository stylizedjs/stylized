import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { globalStyles } from '../globalStyles';

export enum ButtonVariants {
  PRIMARY = 'primary',
  BASIC = 'basic',
}

@customElement('stlzd-button')
export class StlzdButton extends LitElement {
  static styles = [
    globalStyles,
    css`
            button {
                background-color: var(--_primary-color);
                color: var(--_white-color);
                border-radius: 4px;
                font-family: "Inter", sans-serif;
                font-size: 15px;
                cursor: pointer;
                outline: none;
                border: none;
                padding: 7px 20px;
                transition: all 0.4s ease;
            }

            button:hover {
                background-color: var(--_primary-hovered-color);
            }

            button:active {
                background-color: var(--_primary-active-color);
            }

            button([type="basic"]) {
                background-color: transparent;
                color: var(--_primary-color);
            }

            button([type="basic"]:hover) {
                background-color: var(--_lavender-blue-transparent-color);
            }

            button([type="basic"]:active) {
                background-color: var(--_lavender-blue-transparent-color);
            }
        `,
  ];

  @property()
  type?: ButtonVariants = ButtonVariants.PRIMARY;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stlzd-button': StlzdButton;
  }
}
