/** @jsx jsx */
import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import data from "./data"

function Header() {
  return (
    <TableRow heading={true}>
      <TableItem>Kg</TableItem>
      <TableItem>Age</TableItem>
      <TableItem>Atropine</TableItem>
      <TableItem>Pralidoxime</TableItem>
      <TableItem>Midazolam</TableItem>
    </TableRow>
  )
}

function Row(object, lastRow = false) {
  const { kg, age, atropine, pralidoxime, midazolam } = object
  return (
    <TableRow lastRow={lastRow}>
      <TableItem>{kg}</TableItem>
      <TableItem>{age}</TableItem>
      <TableItem>{atropine}</TableItem>
      <TableItem>{pralidoxime}</TableItem>
      <TableItem>{midazolam}</TableItem>
    </TableRow>
  )
}

function Rows(data) {
  const rows = data.map((object, index) => {
    if (index < data.index) {
      return <Row object={object}></Row>
    }

    return <Row object={object}></Row>
  })

  console.log(rows)
}

export default function PediatricNerveAgent(props) {
  /* <Table columns={Object.keys(data).length} {...rest}> */
  return (
    <Table columns={5} {...props}>
      <Header />
    </Table>
  )
}
