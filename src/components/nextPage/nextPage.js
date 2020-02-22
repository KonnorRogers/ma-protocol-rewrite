import React from "react"
import MyLink from "../myLink/myLink.js"
import * as styles from "../../styles/global.js"
import * as nextPageStyles from "./styles.js"

const NextPage = ({ to, text }) => {
  if (to && text) {
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

  return <div></div>
}

export default NextPage
