import { css } from 'lit';

export const defaultColors = css`
    :host {
        --_primary-color: var(--primary-color, #005be4);
        --_primary-hovered-color: var(--primary-hovered-color, #0050c9);
        --_primary-active-color: var(--primary-active-color, #0044aa);

        --_soft-peach-color: var(--soft-peach-color, #eeeeee);
        --_lavender-blue-transparent-color: var(--lavender-blue-transparent-color, #bed8ff63);
        --_medium-gray-color: var(--medium-gray-color, #7d7c83);
        --_topaz-color: var(--topaz-color, #7d7c83);
        --_nero-color: var(--nero-color, #222222);
        --_gainsboro-color: var(--gainsboro-color, #dbdbdb);

        --_white-color: var(--white-color, #fff);
        --_black-color: var(--black-color, #000);

        --_command-line-background-color: var(--command-line-background-color, #f1f1f1);

        --_alert-standard-bg-color: var(--alert-standard-bg-color, #d3e5ff);
        --_alert-border-bg-color: var(--alert-border-bg-color, #79aeff);
        --_alert-success-bg-color: var(--alert-success-bg-color, #dffddd);
        --_alert-success-border-color: var(--alert-success-border-color, #92fd8a);
        --_alert-success-text: var(--alert-success-text, #32c927);
        --_alert-danger-bg-color: var(--alert-danger-bg-color, #fddddd);
        --_alert-danger-border-color: var(--alert-danger-border-color, #fd8a8a);
        --_alert-danger-text: var(--alert-danger-text, #ca3939);
        --_alert-warning-bg-color: var(--alert-warning-bg-color, #fbfddd);
        --_alert-warning-border-color: var(--alert-warning-border-color, #fbfd8a);
        --_alert-warning-text-color: var(--alert-warning-text-color, #c2bf1e);
    }
`;
