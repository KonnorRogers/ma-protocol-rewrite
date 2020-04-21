import * as React from "react"
import { Table, TableRow, TableItem } from "../../../components/table"
import data from "./data"
import * as styles from "./styles"
import { capitalize } from "../../../utils/stringUtils"

function TableHeader(_props) {
  function items() {
    const keys = Object.keys(data[0])
    const columns = keys.map((key) => {
      return <TableItem key={key}>{capitalize(key.toString())}</TableItem>
    })

    return columns
  }

  return (
    <TableRow heading={true} css={styles.header}>
      {items()}
    </TableRow>
  )
}

function TableData(_props) {
  return data.map((obj) => {
    return (
      <TableRow key={obj.weight.toString()} css={styles.row}>
        <TableItem>{obj.weight}</TableItem>
        <TableItem>{obj.mild}</TableItem>
        <TableItem>{obj.moderate}</TableItem>
        <TableItem>{obj.severe}</TableItem>
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
