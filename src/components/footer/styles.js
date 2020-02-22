import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

export const footer = css`
  margin: 0;
  padding: 0.5rem;
  font-size: small;
  text-align: center;
  background: rgba(0, 0, 0, 0.07);

  ${Screen.small} {
    display: flex;
    justify-content: center;
    font-size: medium;
  }

  ${Screen.medium} {
    font-size: large;
    padding: 0.25rem;
  }
`

export const gatsbyLink = css`
  padding: 0 0.25rem;
  margin: 0 0.25rem;
  color: var(--gatsby-purple);

  &:hover {
    background: var(--gatsby-purple);
    color: white;
  }
`

export const author = css`
  display: block;
  ${Screen.small} {
    &::before {
      content: " | ";
      margin: 1px;
      padding: 1px;
    }
  }
`
