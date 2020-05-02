import * as React from "react"
import { useColorMode } from "theme-ui"
import { css } from "@emotion/core"
import { Table, TableRow, TableItem } from "../../table"
import data from "./data"

const tableCss = colorMode => {
  let color = "#000000"
  // let font = ''

  if (colorMode === "dark") {
    color = "#555555"
  }

  return css`
    .item-heading {
      background-color: ${color};
    }
  `
}

export default function FastStrokeScale() {
  const colorMode = useColorMode()[0]
  return (
    <Table css={tableCss(colorMode)} style={{ minWidth: "200px" }}>
      <TableRow>
        <TableItem> Fast ED Stroke Scale </TableItem>
      </TableRow>
      <TableRow>
        <TableItem colspan={4}> Item </TableItem>
        <TableItem> Score </TableItem>
      </TableRow>

      <TableData />
    </Table>
  )
}

function TableData() {
  return data.map(obj => {
    return (
      <>
        <TableRow>
          <TableItem className="item-heading">{obj.heading}</TableItem>
        </TableRow>
        {itemsMap(obj)}
      </>
    )
  })
}

function itemsMap(obj) {
  return obj.items.map((item, index) => {
    return (
      <TableRow>
        <TableItem key={item} colspan={4}>
          {item}
        </TableItem>
        <TableItem key={item}>{index}</TableItem>
      </TableRow>
    )
  })
}
