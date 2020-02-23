import React from "react"
import PropTypes from "prop-types"

import * as styles from "./styles.js"

const capitalize = level => {
  const firstLetter = level[0].toUpperCase()
  const restOfWord = level.slice(1)

  return firstLetter + restOfWord
}

const EmtLevel = ({ children, level, medControl }) => {
  const standingOrders = " (Standing Orders)"
  const medicalControl = " (Medical Control)"

  function getLevel() {
    if (medControl) {
      return level + "-med-control"
    }

    return level
  }

  function toEmtText() {
    const text = `${capitalize(level)}`
    const levelText = `EMT-${text}`

    return levelText
  }

  function isFirstResponder(lvl) {
    if (lvl === "first-responder") {
      return true
    }

    return false
  }

  function firstResponderText() {
    const text = "First-Responder"

    if (!isFirstResponder(level)) {
      return null
    }

    if (medControl) {
      return text + medicalControl
    }

    return text + standingOrders
  }

  function getLevelText() {
    const firstResponderTxt = firstResponderText()
    if (firstResponderTxt) {
      return firstResponderTxt
    }

    const levelText = toEmtText(level)
    if (medControl) {
      return levelText + medicalControl
    }

    return levelText + standingOrders
  }
  return (
    <>
      <h2 id={getLevel()} css={styles.header(level)}>
        <a css={styles.link(level)} href={`#${getLevel()}`}>
          {getLevelText()}
        </a>
      </h2>
      <section className={level} css={styles.level(level)}>
        {children}
      </section>
    </>
  )
}

EmtLevel.propTypes = {
  level: PropTypes.node.isRequired,
}

export default EmtLevel
