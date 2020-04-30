import * as React from "react"
import { useColorMode } from "theme-ui"
import * as styles from "./styles"

export default function StrokeAlertCriteria(_props) {
  return (
    <div css={styles.wrapper}>
      <div>
        <CriteriaHeading />
        <CriteriaData />
      </div>
      <div css={styles.additionalVitals}>
        <TimeLastKnownWell />
        <BloodGlucoseLevel />
      </div>
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

function Square() {
  const colorMode = useColorMode()[0]
  const color = colorMode === "dark" ? "white" : "black"
  return <div css={styles.square(color)}></div>
}

function TimeLastKnownWell() {
  return (
    <div>
      <div>Time Last Known Well:</div>
      <div css={styles.entryBox}></div>
    </div>
  )
}

function BloodGlucoseLevel() {
  return (
    <div>
      <div>Blood Glucose Level:</div>
      <div css={styles.entryBox}></div>
    </div>
  )
}
