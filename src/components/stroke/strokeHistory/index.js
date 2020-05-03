import * as React from "react"
import data from "./data"
import { Box, Flex } from "theme-ui"

export default function StrokeHistory() {
  return (
    <>
      <Medications />
      <Conditions />
    </>
  )
}

function Medications() {
  const { medications } = data
  const medMap = medications.map(medication => (
    <Box key={medication}>{medication}</Box>
  ))
  return (
    <Flex>
      <Box>Medications</Box>
      <Box>{medMap}</Box>
    </Flex>
  )
}

function Conditions() {
  const { conditions } = data

  const conditionMap = conditions.map(condition => (
    <Box key={condition}>{condition}</Box>
  ))
  return (
    <Flex sx={{ flex: "1 1 auto" }}>
      <Box>Medications</Box>
      <Box>{conditionMap}</Box>
    </Flex>
  )
}
