import React from "react"

import MyFooter from "../../components/footer.js"

export default ({ children }) => (
  <div className="content">
    {children}
    <MyFooter />
  </div>
)
