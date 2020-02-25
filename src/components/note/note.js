import React from "react"
import PropTypes from "prop-types"
import InformationBox from "../informationBox/informationBox.js"

const Note = ({ children, id, text, borderColor, ...rest }) => {
  return (
    <InformationBox id={id} text={text} borderColor={borderColor} {...rest}>
      {children}
    </InformationBox>
  )
}

Note.defaultProps = {
  borderColor: `#6666ff`,
  text: "Note:",
}

Note.propTypes = {
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Note
