import React from "react"
import PropTypes from "prop-types"
import InformationBox from "../informationBox"

/**
 * Caution component
 */
const Caution = ({ children, borderColor, text, alignment, ...rest }) => {
  return (
    <InformationBox
      text={text}
      borderColor={borderColor}
      alignment={alignment}
      {...rest}
    >
      {children}
    </InformationBox>
  )
}

Caution.defaultProps = {
  borderColor: `rgba(218, 165, 32, 1)`,
  text: "Caution:",
  alignment: "left",
}

Caution.propTypes = {
  borderColor: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Caution
