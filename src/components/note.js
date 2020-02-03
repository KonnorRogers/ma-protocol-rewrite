import React from "react"
import { css } from "@emotion/core"

const noteCSS = (alignment = "center") => css`
  margin: 0.75rem;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid rgba(0, 0, 255, 0.4);
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.1),
    0 2px 3px -1px rgba(0, 0, 0, 0.05);
  text-align: ${alignment};
`

const Note = ({ children }) => <div css={noteCSS}>{children}</div>

export default Note
