/** @jsx jsx */
import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import data from "./data"
import { jsx, css } from "@emotion/core"
import Screen from "../../../utils/screen.js"

function TableHeader(_props) {
  function capitalize(string) {
    return string.replace(/^\w/, (c) => c.toUpperCase())
  }

  function TableHeaderItems({ children }) {
    const keys = Object.keys(data[0])
    const columns = keys.map((key, index) => {
      let lastItem = false

      if (index >= keys.length - 1) {
        lastItem = true
      }

      return (
        <TableItem key={key} lastItem={lastItem}>
          {capitalize(key.toString())}
        </TableItem>
      )
    })

    return columns
  }

  return (
    <TableRow heading={true}>
      <TableHeaderItems />
    </TableRow>
  )
}

function TableData(_props) {
  return data.map((obj, index) => {
    let lastRow = false

    if (data.length >= index - 1) {
      lastRow = true
    }

    return (
      <TableRow lastRow={lastRow}>
        <TableItem lastItem
      </TableRow>
    )
  })
}

function PediatricAtropens(_props) {
  return (
    <Table columns={4}>
      <TableHeader />
      <TableData />
    </Table>
  )
}

export default PediatricAtropens
