import { css } from "@emotion/core"
import Screen from "../../../utils/screen"

export const heading = css`
  font-size: 0.75rem;

  ${Screen.small} {
    font-size: 0.85rem;
  }

  ${Screen.medium} {
    font-size: 1.1rem;
  }
`
