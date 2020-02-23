import React from "react"
import { Link } from "gatsby"

import * as styles from "../../styles/global.js"

const MyLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => (
  <Link
    css={styles.links}
    to={to}
    activeClassName={activeClassName}
    partiallyActive={partiallyActive}
    {...other}
  >
    {children}
  </Link>
)

export default MyLink
