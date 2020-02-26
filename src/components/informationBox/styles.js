import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

export const info = ({ alignment = "center", borderColor }) => {
  return css`
    margin: 0.75rem;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    border: 2px solid ${borderColor};
    text-align: ${alignment};
    font-size: 1rem;

    ${Screen.small} {
      font-size: 1.1rem;
    }
  `
}

export const text = ({ alignment, borderColor }) => css`
  margin: 1rem 0 -0.25rem 0;
  padding-left: 1rem;
  text-align: ${alignment};
  color: ${borderColor};
`
