import React from "react"
import MyLink from "./myLink.js"
import { css } from "@emotion/core"

import * as styles from "../styles/global.js"

const prevPageCSS = css`
  text-align: left;
  padding: 0;
  margin: 0;
`

const PrevPage = ({ to, text }) => {
  if (to && text) {
    return (
      <div css={prevPageCSS}>
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
  return <div></div>
}

export default PrevPage
