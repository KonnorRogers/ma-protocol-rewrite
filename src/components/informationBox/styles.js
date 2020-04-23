import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

export const info = ({ alignment = "center", borderColor }) => {
  return css`
    margin: 0.75rem auto;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    border: 2px solid ${borderColor};
    text-align: ${alignment};
    font-size: 1rem;
    max-width: 800px;

    ${Screen.small} {
      font-size: 1.1rem;
    }
  `
}

export const text = ({ alignment, borderColor }) => css`
  margin: 1rem auto -0.25rem auto;
  padding: 0.25rem 1rem;
  text-align: ${alignment};
  color: ${borderColor};
`

export const wrapper = css`
  margin: auto;
  max-width: 800px;
`
