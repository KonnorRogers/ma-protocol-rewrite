/** @jsx jsx */
import * as React from "react"
import data from "./data"
import { jsx, Box } from "theme-ui"
import CheckList from "../../checkList"
import * as colors from "../colors"

export default function StrokeHistory() {
  return (
    <Box sx={{ border: `2px solid ${colors.peach}`, borderRadius: "8px" }}>
      <Medications />
      <Conditions />
    </Box>
  )
}

function Medications() {
  const { medications } = data
  const medMap = medications.map(medication => {
    return (
      <CheckList.List key={medication}>
        <CheckList.CheckBox />
        <Box>{medication}</Box>
      </CheckList.List>
    )
  })
  return (
    <CheckList.Wrapper>
      <Box>Medications</Box>
      <Box>{medMap}</Box>
    </CheckList.Wrapper>
  )
}

function Conditions() {
  const { conditions } = data

  const conditionMap = conditions.map(condition => {
    return (
      <CheckList.List key={condition}>
        <CheckList.CheckBox />
        <Box>{condition}</Box>
      </CheckList.List>
    )
  })

  return (
    <CheckList.Wrapper>
      <Box>Conditions</Box>
      <Box>{conditionMap}</Box>
    </CheckList.Wrapper>
  )
}
