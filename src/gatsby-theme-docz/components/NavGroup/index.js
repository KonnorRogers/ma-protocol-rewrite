import { css } from "@emotion/core"
import { NavGroup as OriginalNavGroup } from "gatsby-theme-docz/src/components/NavGroup"

const navGroupLinksStyle = css`
  div[data-testid="nav-group-links"] a {
    &:hover,
    &:focus {
      color: var(--link-blue);
    }
  }
`

export const NavGroup = () => {
  return <OriginalNavGroup css={navGroupLinksStyle} />
}
