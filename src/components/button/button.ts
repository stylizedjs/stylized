import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { globalStyles } from '../global-styles';

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

            :host([type="basic"]) button {
                background-color: transparent;
                color: var(--_primary-color);
            }

            :host([type="basic"]:hover) button {
                background-color: var(--_lavender-blue-transparent-color);
            }

            :host([type="basic"]:active) button {
                background-color: var(--_lavender-blue-transparent-color);
            }
        `,
  ];

  @property()
  type?: ButtonVariants;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stlzd-button': StlzdButton;
  }
}
