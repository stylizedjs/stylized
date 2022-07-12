import { css } from 'lit';

import { defaultColors } from './default-colors';

export const globalStyles = [
  defaultColors,
  css`
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap");

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        height: 100vh;
        width: 100vw;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-family: "Inter", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 800;
    }

    ol,
    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    pre {
        background-color: var(--_nero-color);
        color: var(--_white-color);
        display: inline-block;
        padding: 15px 20px;
        border-radius: 6px;
    }

    input[type='checkbox']:checked + .slider {
        background-color: var(--_primary-color);
    }

    input[type='checkbox']:focus + .slider {
        box-shadow: 0 0 1px var(--_primary-color);
    }

    input[type='checkbox']:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 50px;
    }

    h3 {
        font-size: 40px;
    }

    h4 {
        font-size: 30px;
    }

    h5 {
        font-size: 20px;
    }

    h6 {
        font-size: 15px;
    }

    p {
        line-height: 26.15px;
    }
    `,
];
