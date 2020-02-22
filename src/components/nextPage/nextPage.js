import React from "react"
import MyLink from "./myLink.js"
import { css } from "@emotion/core"
import * as styles from "../styles/global.js"

const nextPageCSS = css`
  text-align: right;
  padding: 0;
  margin: 0;
`

const NextPage = ({ to, text }) => {
  if (to && text) {
    return (
      <div css={nextPageCSS}>
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
