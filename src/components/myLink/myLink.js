import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.string,
}

export default MyLink
