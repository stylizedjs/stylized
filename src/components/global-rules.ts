import { css } from 'lit';

export const globalRules = [
    css`
    .aligned {
        display: flex;
        flex-direction: row;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .unselectable {
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
    }

    .center-ai {
        display: flex;
        align-items: center;
    }

    .center-jf {
        display: flex;
        justify-content: center;
    }

    .txt-center {
        text-align: center;
    }

    .space-between {
        display: flex;
        justify-content: space-between;
    }

    .space-evenly {
        display: flex;
        justify-content: space-evenly;
    }
    `,
];