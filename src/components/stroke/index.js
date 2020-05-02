import * as React from "react"
import StrokeNote from "./strokeNote"
import PatientInformation from "./patientInformation"
import StrokeAlertCriteria from "./strokeAlertCriteria"
import FastStrokeScale from "./fastStrokeScale"

export default function Stroke(_props) {
  return (
    <>
      <StrokeNote />
      <PatientInformation />
      <StrokeAlertCriteria />
      <FastStrokeScale />
    </>
  )
}
