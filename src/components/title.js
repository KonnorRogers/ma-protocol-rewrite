import React from "react"
import { useCurrentDoc } from "docz"
import { css } from "@emotion/core"

import * as styles from "../styles/global.js"

const titleCSS = css`
  margin-top: 2rem;
  text-align: center;
`

const Title = ({ title, ...rest }) => {
  if (!title) {
    title = useCurrentDoc().name
  }

  return (
    <h2 id={title} css={titleCSS} {...rest}>
      <a href={`#${title}`} css={styles.links}>
        {title}
      </a>
    </h2>
  )
}
export default Title
