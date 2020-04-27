import * as React from "react"
import { css } from "@emotion/core"
import Note from "../../../components/note"

const flexBox = css`
  display: flex;
  justify-content: space-between;
  div:last-of-type {
    padding-right: 1rem;
  }
`

export default function PatientInformation(_props) {
  return (
    <Note>
      <div css={flexBox}>
        <div>Date:</div>
        <div>Amb #:</div>
        <div>Age:</div>
        <div>Gender:</div>
      </div>
      <div css={flexBox}>
        <div>Patient's Name:</div>
        <div>Date Of Birth:</div>
      </div>
    </Note>
  )
}
