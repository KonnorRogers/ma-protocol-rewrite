import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

const colors = {
  "first-responder": "deepskyblue",
  basic: "green",
  advanced: "#ffbc0d",
  paramedic: "red",
}

export const header = level => css`
  margin: 0;
  font-size: 1.2rem;
  color: ${colors[level]};

  ${Screen.small} {
    font-size: 1.3rem;
  }
`

export const link = level => css`
  color: ${colors[level]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const level = level => css`
  margin: 0.5rem auto 2rem auto;
  padding: 1.5rem;
  border: 2px solid ${colors[level]};
  border-radius: 12px;
  font-size: 1.15rem;

  ul {
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  ${Screen.small} {
    font-size: 1.25rem;
  }
`

export const outerBlock = css`
  padding-bottom: 0.5rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;

  ${Screen.small} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.75rem;
  }
`
