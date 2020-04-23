import { css } from "@emotion/core"
import Screen from "../../utils/screen.js"

const colors = {
  "first-responder": "deepskyblue",
  basic: "green",
  advanced: "#ffbc0d",
  paramedic: "red",
}

export const header = (level) => css`
  margin: 0;
  font-size: 1.2rem;
  color: ${colors[level]};

  ${Screen.small} {
    font-size: 1.3rem;
  }
`

export const link = (level) => css`
  color: ${colors[level]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const level = (level) => css`
  overflow-x: scroll;
  margin: 0.5rem auto 1rem auto;
  border: 2px solid ${colors[level]};
  border-radius: 12px;
  font-size: 1.15rem;
  padding: 0.75rem 0.45rem 0 0.45rem;

  & > .emt-box {
    padding: 1.5rem;
  }

  ul {
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  ${Screen.small} {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem 0 1.5rem;
  }

  ${Screen.extraSmall} {
    overflow: auto;
  }
`
