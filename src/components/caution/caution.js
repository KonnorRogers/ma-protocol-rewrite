import React from "react"
import InformationBox from "./informationBox/informationBox.js"

export const Caution = ({ children, ...rest }) => {
  const borderColor = `rgba(218, 165, 32, 1)`
  const text = "Caution:"

  return (
    <InformationBox text={text} borderColor={borderColor} {...rest}>
      {children}
    </InformationBox>
  )
}

export default Caution
