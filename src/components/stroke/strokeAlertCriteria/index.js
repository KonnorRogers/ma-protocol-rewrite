import * as React from "react"
import Screen from "../../../utils/screen"
import { css } from "@emotion/core"
import { useColorMode } from "theme-ui"
import * as styles from "./styles"

export default function StrokeAlertCriteria(_props) {
  return (
    <div css={styles.border} style={{ paddingTop: "3rem", width: "100%" }}>
      <div>
        <CriteriaHeading />
        <CriteriaData />
      </div>
      <div></div>
    </div>
  )
}

function CriteriaHeading(_props) {
  return (
    <div style={{ textAlign: "center" }}>
      <strong>STROKE ALERT! Criteria:</strong>
    </div>
  )
}

function CriteriaData(_props) {
  return (
    <div css={styles.criteriaBox}>
      <div css={styles.addHeaders}>
        <span>Time last known well (TLKW) &lt;5hours? </span>
        <ThreeSquares />
      </div>
      <div>
        <span>Any abnormal finding not attributable to head trauma?</span>
        <ThreeSquares />
      </div>
      <div>
        <span>Blood Glucose &gt;60?</span>
        <ThreeSquares />
      </div>
    </div>
  )
}

function ThreeSquares(_props) {
  return (
    <>
      <Square />
      <Square />
      <Square />
    </>
  )
}

const squareCss = color => css`
  height: 1.25rem;
  width: 1.25rem;
  flex: 0 0 1.25rem;
  border: 1.25px solid ${color};
  position: relative;

  ${Screen.small} {
    height: 1.5rem;
    width: 1.5rem;
    flex-basis: 1.5rem;
  }
`

function Square() {
  const colorMode = useColorMode()[0]
  const color = colorMode === "dark" ? "white" : "black"
  return <div css={squareCss(color)}></div>
}
