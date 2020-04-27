import * as React from "react"
import StrokeNote from "./strokeNote"
import PatientInformation from "./patientInformation"
import StrokeAlertCriteria from "./strokeAlertCriteria"

export default function StrokeCard(_props) {
  return (
    <>
      <StrokeNote />
      <PatientInformation />
      <StrokeAlertCriteria />
    </>
  )
}
