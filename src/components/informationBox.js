import React from "react"
import { css } from "@emotion/core"
import Screen from "../utils/screen.js"

import * as styles from "../styles/global.js"

const infoCSS = ({ alignment = "center", borderColor }) => {
  return css`
    margin: 0.75rem;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    border: 2px solid ${borderColor};
    text-align: ${alignment};
    font-size: 1rem;

    ${Screen.small} {
      font-size: 1.1rem;
    }
  `
}

const textCSS = ({ alignment, borderColor }) => css`
  margin: 1rem 0 -0.25rem 0;
  padding-left: 1rem;
  text-align: ${alignment};
  color: ${borderColor};
`

const InformationBox = ({
  id,
  text,
  children,
  alignment,
  css,
  borderColor,
  ...rest
}) => {
  const IdAnchor = () => (
    <a
      href={`#${id}`}
      css={[styles.links, textCSS({ alignment, borderColor })]}
    >
      <strong>{text}</strong>
    </a>
  )

  const InfoBox = () => (
    <div id={id} css={[infoCSS({ alignment, borderColor }), css]} {...rest}>
      {children}
    </div>
  )

  if (id) {
    return (
      <>
        <IdAnchor />
        <InfoBox />
      </>
    )
  }

  return <InfoBox />
}

export default InformationBox
