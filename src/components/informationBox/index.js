import React from "react"
import PropTypes from "prop-types"

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
    <span style={{ display: "inline-block" }}>
      <a
        href={`#${id}`}
        css={[styles.links, infoStyles.text({ alignment, borderColor })]}
      >
        <strong>{text}</strong>
      </a>
    </span>
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
      <div css={infoStyles.wrapper}>
        <IdAnchor />
        <InfoBox />
      </div>
    )
  }

  return <InfoBox />
}

InformationBox.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
  css: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  borderColor: PropTypes.string.isRequired,
}

InformationBox.defaultProps = {
  alignment: "center",
}

export default InformationBox
