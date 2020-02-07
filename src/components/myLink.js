import { css } from "@emotion/core"
import { Link } from "gatsby"

const linkCSS = css`
  text-decoration: none;
  padding: 0.25rem;
  color: #0b5fff;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #0b5fff;
  }
`

const MyLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => (
  <Link
    css={linkCSS}
    to={to}
    activeClassName={activeClassName}
    partiallyActive={partiallyActive}
    {...other}
  >
    {children}
  </Link>
)

export default MyLink
