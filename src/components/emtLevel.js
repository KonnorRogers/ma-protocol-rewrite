import { css } from "@emotion/core"
import Screen from "../utils/screen.js"

const colors = {
  basic: "green",
  advanced: "#ffff1c",
  paramedic: "red",
}

const capitalize = level => {
  const firstLetter = level[0].toUpperCase()
  const restOfWord = level.slice(1)

  return firstLetter + restOfWord
}

const emtLevelCSS = level => css`
  margin: 2rem auto 4rem auto;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid ${colors[level]};
  font-size: 1.15rem;

  &::before {
    content: "EMT-${capitalize(level)}";
    position: absolute;
    top: -2rem;
    color: ${colors[level]}
  }

  ${Screen.small} {
    font-size: 1.25rem;
  }
`

const EmtLevel = ({ children, level }) => (
  <div className="emt-level-wrapper" style={{ position: "relative" }}>
    <div className={level} css={emtLevelCSS(level)}>
      {children}
    </div>
  </div>
)

export default EmtLevel
