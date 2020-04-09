import React from "react"
import MyLink from "../myLink"
import PropTypes from "prop-types"
import * as styles from "../../styles/global.js"
import * as nextPageStyles from "./styles.js"

const NextPage = ({ to, text }) => {
  /** If to & text are not given, return a div for spacing purposes */
  if (!to && !text) {
    return <div></div>
  }

  return (
    <div css={nextPageStyles.nextPage}>
      <MyLink to={to}>
        <span className="next-text">
          {`${text}`}
          <span css={styles.arrow}>{`\u2192`}</span>
        </span>
        <span className="next-word">Next</span>
      </MyLink>
    </div>
  )
}

NextPage.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

export default NextPage
