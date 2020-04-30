import * as React from "react"
import { css } from "@emotion/core"
import Note from "../../../components/note"
import Screen from "../../../utils/screen"

const flexBox = css`
  display: flex;
  margin: 0.5rem 0;
  flex-flow: column;

  ${Screen.extraSmall} {
    flex-flow: row;
  }
`

const extendedFlexBox = css`
  ${flexBox}

  div:last-of-type {
    padding-right: 2rem;
  }

  ${Screen.extraSmall} {
    justify-content: space-between;
  }
`

export default function PatientInformation(_props) {
  return (
    <Note>
      <div css={extendedFlexBox}>
        <div>Date:</div>
        <div>Amb #:</div>
        <div>Age:</div>
        <div>Gender:</div>
      </div>
      <div css={flexBox}>
        <div style={{ width: "60%" }}>Patient's Name:</div>
        <div>Date Of Birth:</div>
      </div>
    </Note>
  )
}
