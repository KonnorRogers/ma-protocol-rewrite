import React from "react"
import PropTypes from "prop-types"
import InformationBox from "../informationBox"

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
  id: PropTypes.string,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Note
