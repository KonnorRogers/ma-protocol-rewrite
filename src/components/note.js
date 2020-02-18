import React from "react"
import InformationBox from "./informationBox.js"

const Note = ({ children, id, ...rest }) => {
  const borderColor = `#6666ff`

  const text = "Note:"

  return (
    <InformationBox id={id} text={text} borderColor={borderColor} {...rest}>
      {children}
    </InformationBox>
  )
}

export default Note
