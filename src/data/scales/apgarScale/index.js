import * as React from "react"
import { data, colors, headers } from "./data"
import {
  Table,
  TableCell,
  TableRow,
  TableItem,
} from "../../../components/table"

import { capitalize } from "../../../utils/stringUtils"
import * as styles from "./styles"

function Items(_props) {
  const headerValues = Object.values(headers)
  return headerValues.map(header => {
    return <TableItem key={header}>{header}</TableItem>
  })
}

function HeaderRow(_props) {
  return (
    <TableRow heading={true} css={styles.heading}>
      <Items />
    </TableRow>
  )
}

function boldFirstLetter(string) {
  const firstLetter = string[0]
  const restOfWord = string.slice(1)

  return (
    <span>
      <strong>{firstLetter}</strong>
      {restOfWord}
    </span>
  )
}

function Data(_props) {
  const objects = Object.keys(data)
  const rows = Object.keys(data.features)

  // return rows.map((key) => {
  return rows.map(key => {
    const Items = _props => {
      return objects.map((item, index) => {
        let string = capitalize(data[item][key])

        // Only bold the first column
        if (index === 0) {
          string = boldFirstLetter(string)
        }

        return (
          <TableItem
            style={{ backgroundColor: colors[key], color: "black" }}
            key={data[item][key]}
            colormode="light"
          >
            <TableCell>{string}</TableCell>
          </TableItem>
        )
      })
    }

    return (
      <TableRow key={key} colormode="light">
        <Items />
      </TableRow>
    )
  })
}

function ApgarScale(_props) {
  return (
    <>
      <h3 id="apgar-scale" style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <a href="#apgar-scale">APGAR Scale</a>
      </h3>
      <Table>
        <HeaderRow />
        <Data />
      </Table>
    </>
  )
}

export default ApgarScale
