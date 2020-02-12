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

const Title = ({title}) => {
  const x = useCurrentDoc().name
  if (!title) {
    // title = useCurrentDoc().name;
    console.log(title);
  }

  return (
    <h2 id={x} css={titleCSS}>
      <a href={`#${x}`} css={aCSS}>{x}</a>
    </h2>
  )
}
export default Title;
