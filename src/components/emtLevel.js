import Screen from "../utils/screen.js"
import { css } from "@emotion/core"

const colors = {
  basic: "green",
  advanced: "yellow",
  paramedic: "red",
}

const emtLevelCSS = level => css`
  margin: 1.5rem auto;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${colors[level]};
`

const EmtLevel = ({ children, level }) => (
  <div className={level} css={emtLevelCSS(level)}>
    {children}
  </div>
)

export default EmtLevel
