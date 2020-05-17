/** @jsx jsx */
import * as React from "react"
import data from "./data"
import { jsx, Box, Flex, useThemeUI } from "theme-ui"
import CheckList from "../../checkList"
import * as colors from "../colors"

export default function StrokeHistory() {
  return (
    <Flex
      sx={{
        marginTop: "1rem",
        flexDirection: ["column", "row"],
        border: `2px solid ${colors.peach}`,
        borderRadius: "8px",
      }}
    >
      <Medications />
      <Conditions />
    </Flex>
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
      <CheckList.UnderlinedBox>Medications</CheckList.UnderlinedBox>
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
      <CheckList.UnderlinedBox>Conditions</CheckList.UnderlinedBox>
      <Box>{conditionMap}</Box>
    </CheckList.Wrapper>
  )
}
