import React from "react"
import { useCurrentDoc } from "docz"
import { css } from "@emotion/core"

const titleCSS = css`
  margin-top: 2rem;
  text-align: center;
`

const aCSS = css`
  color: var(--link-blue);
  padding: 0.25rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Title = ({title, ...rest}) => {
  if (!title) {
    title = useCurrentDoc().name;
  }

  return (
    <h2 id={title} css={titleCSS} {...rest}>
      <a href={`#${title}`} css={aCSS}>{title}</a>
    </h2>
  )
}
export default Title;
