import * as React from "react"
import * as styles from "./styles"

export default function NoteBox({ children }) {
  return <div css={styles.flex}>{children}</div>
}
