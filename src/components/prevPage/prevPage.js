import React from "react"
import MyLink from "../myLink/myLink.js"
import PropTypes from "prop-types"

import * as styles from "../../styles/global.js"
import * as prevPageStyles from "./styles.js"

const PrevPage = ({ to, text }) => {
  if (!to && !text) {
    return <div></div>
  }

  return (
    <div css={prevPageStyles.prevPage}>
      <MyLink to={to}>
        <span className="prev-text">
          <span css={styles.arrow}>{`\u2190`}</span>
          {`${text}`}
        </span>
        <span className="prev-word">Prev</span>
      </MyLink>
    </div>
  )
}

PrevPage.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

export default PrevPage
