import React from "react"
import Footer from "../components/footer/footer.js"

export default ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
