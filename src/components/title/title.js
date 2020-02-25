import React from "react"
import { useCurrentDoc } from "docz"

import * as styles from "../../styles/global.js"
import * as titleStyles from "./styles.js"

const Title = ({ title, ...rest }) => {
  if (!title) {
    title = useCurrentDoc().name
  }

  if (useCurrentDoc().route === "/") {
    return null
  }

  return (
    <h2 id={title} css={titleStyles.title} {...rest}>
      <a href={`#${title}`} css={styles.links}>
        {title}
      </a>
    </h2>
  )
}
export default Title
