import { css } from "@emotion/core"

export const tableCss = theme => {
  const background = theme.colors.background
  return css`
    .item-heading {
      text-align: left;
      padding-left: 1rem;
      border: none;
      background: ${background};
      filter: invert(100%);
    }

    .data-item {
      text-align: left;
      padding-left: 2rem;
    }
  `
}
