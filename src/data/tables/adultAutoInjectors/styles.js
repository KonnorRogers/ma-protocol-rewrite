import * as React from "react"
import { css } from "@emotion/core"
import Screen from "../../../utils/screen"

export const header = css`
  font-size: 0.7rem;

  ${Screen.small} {
    font-size: 0.85rem;
  }

  ${Screen.medium} {
    font-size: 0.95rem;
  }
`

export const item = css`
  font-size: 0.65rem;

  ${Screen.small} {
    font-size: 0.75rem;
  }

  ${Screen.medium} {
    font-size: 0.85rem;
  }
`
