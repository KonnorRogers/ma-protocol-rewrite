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
  overflow-x: scroll;
  margin: 0.5rem auto 2rem auto;
  padding: 1.5rem;
  border: 2px solid ${colors[level]};
  border-radius: 12px;
  font-size: 1.15rem;

  & > .emt-box {
    padding: 1.5rem 0.25rem 0.5rem 0.25rem;

    ${Screen.small} {
      padding: 1.5rem 0.5rem 0.75rem 0.5rem;
    }
  }

  ul {
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  ${Screen.extraSmall} {
    overflow: auto;
  }

  ${Screen.small} {
    font-size: 1.25rem;
  }
`
