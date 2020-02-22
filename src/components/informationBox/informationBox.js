import React from "react"

import * as styles from "../../styles/global.js"
import * as infoStyles from "./styles.js"

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
      css={[styles.links, infoStyles.text({ alignment, borderColor })]}
    >
      <strong>{text}</strong>
    </a>
  )

  const InfoBox = () => (
    <div
      id={id}
      css={[infoStyles.info({ alignment, borderColor }), css]}
      {...rest}
    >
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
