import React from "react"
import { css } from "@emotion/core"

const noteCSS = css`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 255, 0.4);
  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.1),
    0 2px 3px -1px rgba(0, 0, 0, 0.05);
`

const Note = ({ children }) => <div css={noteCSS}>{children}</div>

export default Note
