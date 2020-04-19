import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import data from "./data"
import * as styles from "./styles"
import { capitalize } from "../../../utils/stringUtils"

function TableHeader(_props) {
  function TableHeaderItems(_props) {
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
    <TableRow heading={true} css={styles.header}>
      {TableHeaderItems()}
    </TableRow>
  )
}

function TableData(_props) {
  return data.map((obj, index) => {
    let lastRow = false

    if (index >= data.length - 1) {
      lastRow = true
    }

    return (
      <TableRow key={obj.weight.toString()} lastRow={lastRow} css={styles.row}>
        <TableItem>{obj.weight}</TableItem>
        <TableItem>{obj.mild}</TableItem>
        <TableItem>{obj.moderate}</TableItem>
        <TableItem lastItem={true}>{obj.severe}</TableItem>
      </TableRow>
    )
  })
}

function PediatricAtropens(_props) {
  return (
    <>
      <h3
        id="pediatric-atropens"
        style={{ textAlign: "center", marginTop: "0.5rem" }}
      >
        <a href="#pediatric-atropens">Pediatric Atropens</a>
      </h3>
      <p>
        Pediatric Atropine Dosing for Nerve Agent Toxicity Using Pediatric
        Atropens
      </p>
      <Table>
        <TableHeader />
        <TableData />
      </Table>
      <p>
        Note: Pralidoxime reduced dose pediatric autoinjectors are not available
      </p>
    </>
  )
}

export default PediatricAtropens
