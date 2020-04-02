import { css } from "@emotion/core"
import Screen from "../../../utils/screen"

export const row = css`
  font-size: 0.65rem;

  ${Screen.small} {
    font-size: 0.75rem;
  }

  ${Screen.medium} {
    font-size: 0.85rem;
  }
`

export const header = css`
  font-size: 0.75rem;

  ${Screen.small} {
    font-size: 0.95rem;
  }

  ${Screen.medium} {
    font-size: 1.15rem;
  }
`
