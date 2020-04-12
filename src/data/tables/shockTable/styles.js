import { css } from "@emotion/core"
import Screen from "../../../utils/screen"

export const headings = css`
  font-size: 0.75rem;

  ${Screen.small} {
    font-size: 0.85rem;
  }

  ${Screen.medium} {
    font-size: 0.95rem;
  }
`

export const items = css`
  font-size: 0.65rem;
  li {
    margin: 0 -0.5rem;
  }

  ${Screen.small} {
    font-size: 0.75rem;
    li {
      text-align: left;
      margin: 0;
      padding: 0.2rem;
    }
  }

  ${Screen.medium} {
    font-size: 0.85rem;
  }

  ul {
    text-align: left;
    margin: 0.2rem;
  }
`
