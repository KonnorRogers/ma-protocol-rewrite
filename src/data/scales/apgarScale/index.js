import * as React from "react"
import { data, colors, headers } from "./data"
import Table, {
  TableCell,
  TableRow,
  TableItem,
} from "../../../components/table"

import { capitalize } from "../../../utils/stringUtils"
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
    const Items = (_props) => {
      return objects.map((item, index) => {
        let lastItem = false

        if (index >= objects.length - 1) {
          lastItem = true
        }

        let string = capitalize(data[item][key])
        const firstLetter = string[0]
        const restOfWord = string.slice(1)

        // Only bold the first column
        if (index === 0) {
          string = (
            <p>
              <strong>{firstLetter}</strong>
              {restOfWord}
            </p>
          )
        }

        return (
          <TableItem
            style={{ backgroundColor: colors[key], color: "black" }}
            key={data[item][key]}
            lastItem={lastItem}
            colormode="light"
          >
            <TableCell>{string}</TableCell>
          </TableItem>
        )
      })
    }

    let lastRow = false
    if (rowIndex >= rows.length - 1) {
      lastRow = true
    }

    return (
      <TableRow key={key} lastRow={lastRow} colormode="light">
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
