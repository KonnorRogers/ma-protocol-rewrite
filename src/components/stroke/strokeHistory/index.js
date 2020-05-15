/** @jsx jsx */
import * as React from "react"
import data from "./data"
import { jsx, Box, Flex, useThemeUI } from "theme-ui"

export default function StrokeHistory() {
  return (
    <>
      <Medications />
      <Conditions />
    </>
  )
}

function CheckBox() {
  const { theme } = useThemeUI()

  let color = theme.colors.text
  return (
    <Box
      sx={{
        flex: "0 0 1rem",
        margin: "0 1rem",
        height: "1rem",
        width: "1rem",
        border: `1px solid ${color}`,
      }}
    />
  )
}

function CheckListWrapper({ children }) {
  return (
    <Flex sx={{ flexDirection: "column", margin: "1rem" }}>{children}</Flex>
  )
}

function CheckList({ children }) {
  return <Flex sx={{ alignItems: "center" }}>{children}</Flex>
}

function Medications() {
  const { medications } = data
  const medMap = medications.map((medication) => {
    return (
      <CheckList key={medication}>
        <CheckBox />
        <Box>{medication}</Box>
      </CheckList>
    )
  })
  return (
    <CheckListWrapper>
      <Box>Medications</Box>
      <Box>{medMap}</Box>
    </CheckListWrapper>
  )
}

function Conditions() {
  const { conditions } = data

  const conditionMap = conditions.map((condition) => {
    return (
      <CheckList key={condition}>
        <CheckBox />
        <Box>{condition}</Box>
      </CheckList>
    )
  })

  return (
    <CheckListWrapper>
      <Box>Conditions</Box>
      <Box>{conditionMap}</Box>
    </CheckListWrapper>
  )
}
