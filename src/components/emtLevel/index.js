import React from "react"
import PropTypes from "prop-types"

import { capitalize } from "../../utils/stringUtils"
import * as styles from "./styles.js"

const EMTLevel = ({ children, level, medControl, outside }) => {
  const standingOrders = " (Standing Orders)"
  const medicalControl = " (Medical Control)"

  function getLevel() {
    if (medControl) {
      return level + "-med-control"
    }

    return level
  }

  function prependEMT() {
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

    const levelText = prependEMT(level)

    if (medControl) {
      return levelText + medicalControl
    }

    return levelText + standingOrders
  }

  function EmtBox({ outside, children, level }) {
    if (outside) {
      return (
        <section
          className={level}
          css={[styles.level(level), styles.outerBlock]}
        >
          {children}
        </section>
      )
    }

    return (
      <section className={level} css={styles.level(level)}>
        {children}
      </section>
    )
  }

  return (
    <div style={{ margin: "auto", maxWidth: "1000px" }}>
      <h2 id={getLevel()} css={styles.header(level)}>
        <a css={styles.link(level)} href={`#${getLevel()}`}>
          {getLevelText()}
        </a>
      </h2>
      <EmtBox level={level} outside={outside}>
        {children}
      </EmtBox>
    </div>
  )
}

EMTLevel.propTypes = {
  level: PropTypes.string.isRequired,
  medControl: PropTypes.bool,
  outside: PropTypes.bool,
}

EMTLevel.defaultProps = {
  outside: false,
}

export default EMTLevel
