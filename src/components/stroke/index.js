import * as React from "react"
import StrokeNote from "./strokeNote"
import PatientInformation from "./patientInformation"

export default function StrokeCard({ ...rest }) {
  return (
    <>
      <StrokeNote />
      <PatientInformation />
    </>
  )
}
