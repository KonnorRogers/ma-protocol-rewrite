/** @jsx jsx */
import React from "react"
import Footer from "../components/footer"
import { jsx, Global, css } from "@emotion/core"

export default ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          a {
            color: var(--link-blue);
            padding: 0.25rem;
            text-decoration: none;
            display: inline-block;

            &:hover {
              text-decoration: underline;
            }
          }
        `}
      />
      {children}
      <Footer />
    </>
  )
}
