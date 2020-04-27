import * as React from "react"
import Screen from "../../../utils/screen"
import { css } from "@emotion/core"
import { useColorMode } from "theme-ui"

export default function StrokeAlertCriteria(_props) {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <CriteriaHeading />
      </div>
      <div>
        <CriteriaData />
      </div>
    </div>
  )
}

function CriteriaHeading(_props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <strong>STROKE ALERT! Criteria:</strong>
      </div>
    </>
  )
}

const flexBox = css`
  display: flex;
  flex-direction column;
  margin: 1rem;
  justify-content: center;
  font-size: 0.75rem;
  
  ${Screen.small} {
    font-size: 1rem;
  }


  div {
    justify-content: space-between;
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
  }

  p {
    width: 50%;
  }
`

function CriteriaData(_props) {
  return (
    <div css={flexBox}>
      <div>
        <p>Time last known well (TLKW) &lt;5hours? </p>
        <ThreeSquares />
      </div>
      <div style={{ margin: "auto 0" }}>
        <p>Any abnormal finding not attributable to head trauma?</p>
        <ThreeSquares />
      </div>
      <div>
        <p>Blood Glucose &gt;60?</p>
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
  border: 2px solid black;
  flex: 0 0 1.25rem;
  border: 2px solid ${color};

  ${Screen.small} {
    height: 2rem;
    width: 2rem;
    flex-basis: 2rem;
  }
`

function Square() {
  const colorMode = useColorMode()[0]
  const color = colorMode === "dark" ? "white" : "black"
  return <div css={squareCss(color)}></div>
}
