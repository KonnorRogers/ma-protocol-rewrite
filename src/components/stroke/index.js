/** @jsx jsx */
import * as React from "react"
import StrokeNote from "./strokeNote"
import PatientInformation from "./patientInformation"
import StrokeAlertCriteria from "./strokeAlertCriteria"
import FastStrokeScale from "./fastStrokeScale"
import StrokeHistory from "./strokeHistory"
import { jsx, Flex } from "theme-ui"

export default function Stroke(_props) {
  return (
    <>
      <StrokeNote />
      <PatientInformation />
      <StrokeAlertCriteria />
      <Flex
        sx={{
          flexDirection: ["column", "column", "row"],
        }}
      >
        <FastStrokeScale sx={{ marginRight: "5rem" }} />
        <StrokeHistory />
      </Flex>
    </>
  )
}
