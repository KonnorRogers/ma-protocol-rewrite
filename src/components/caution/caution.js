import React from "react"
import PropTypes from "prop-types"
import InformationBox from "../informationBox/informationBox.js"

const Caution = ({ children, borderColor, text, ...rest }) => {
  return (
    <InformationBox text={text} borderColor={borderColor} {...rest}>
      {children}
    </InformationBox>
  )
}

Caution.defaultProps = {
  borderColor: `rgba(218, 165, 32, 1)`,
  text: "Caution:",
}

Caution.propTypes = {
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Caution
