import * as React from "react"
import { data, colors, headers } from "./data"
import Table, {
  TableCell,
  TableRow,
  TableItem,
} from "../../../components/table"

import * as styles from "./styles"

function HeaderRow(_props) {
  function Items(_props) {
    const headerValues = Object.values(headers)
    return headerValues.map((header, index) => {
      const lastItem = false

      if (index >= headers) {
        lastItem = true
      }

      return (
        <TableItem key={index} lastItem={lastItem}>
          {header}
        </TableItem>
      )
    })
  }

  return (
    <TableRow heading={true} css={styles.heading}>
      <Items />
    </TableRow>
  )
}

function Data(_props) {
  const objects = Object.keys(data)
  const rows = Object.keys(data.features)

  return rows.map((key, rowIndex) => {
    const Items = _props => {
      return objects.map((item, index) => {
        let lastItem = false

        if (index >= objects.length - 1) {
          lastItem = true
        }

        return (
          <TableItem
            style={{ backgroundColor: colors[key] }}
            key={data[item][key]}
            lastItem={lastItem}
          >
            <TableCell>{data[item][key]}</TableCell>
          </TableItem>
        )
      })
    }

    let lastRow = false
    if (rowIndex >= rows.length - 1) {
      lastRow = true
    }

    return (
      <TableRow key={key} lastRow={lastRow}>
        <Items />
      </TableRow>
    )
  })
}

function ApgarScale(_props) {
  return (
    <Table columns={4}>
      <HeaderRow />
      <Data />
    </Table>
  )
}

export default ApgarScale
