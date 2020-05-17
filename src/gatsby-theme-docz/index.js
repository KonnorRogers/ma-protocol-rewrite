import React from "react"
import { breakpoints } from "../utils/screen"
import { theme } from "docz"

const Theme = ({ children }) => <div>{children}</div>

const themeConfig = {
  breakpoints: [
    breakpoints.extraSmall,
    breakpoints.small,
    breakpoints.medium,
    breakpoints.large,
    breakpoints.extraLarge,
  ],
}

export default theme(themeConfig)(Theme)
