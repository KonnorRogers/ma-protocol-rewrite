import * as React from "react"
import Table, { TableRow, TableItem } from "../table"
import data from "./data"
import { jsx, css } from "@emotion/core"
import Screen from "../../utils/screen"

function Header() {
  const headerRow = css`
    font-size: 0.7rem;

    {Screen.medium} {
      font-size: 1rem;
    }

    {Screen.extraLarge} {
      font-size: 1.2rem;
    }
  `
  return (
    <TableRow heading={true} css={headerRow}>
      <TableItem>Kg</TableItem>
      <TableItem>Age</TableItem>
      <TableItem>Atropine</TableItem>
      <TableItem>Pralidoxime</TableItem>
      <TableItem lastItem={true}>Midazolam</TableItem>
    </TableRow>
  )
}

function Row({ object, lastRow = false, ...props }) {
  const { kg, age, atropine, pralidoxime, midazolam } = object

  const rowCss = css`
    font-size: 0.65rem;

    ${Screen.medium} {
      font-size: 0.75rem;
    }

    ${Screen.extraLarge} {
      font-size: 1rem;
    }
  `
  return (
    <TableRow lastRow={lastRow} {...props} css={rowCss}>
      <TableItem>{kg}</TableItem>
      <TableItem>{age}</TableItem>
      <TableItem>{atropine}</TableItem>
      <TableItem>{pralidoxime}</TableItem>
      <TableItem lastItem={true}>{midazolam}</TableItem>
    </TableRow>
  )
}

function Rows({ data }) {
  const rows = data.map((object, index) => {
    if (index < data.length - 1) {
      return <Row object={object} key={object.kg.toString()} />
    }

    return <Row object={object} key={object.kg.toString()} lastRow={true} />
  })

  return rows
}

export default function PediatricNerveAgent({ children, ...rest }) {
  return (
    <>
      <h3
        id="pedi-nerve-agent"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <a href="#pedi-nerve-agent">Pediatric Nerve Agent Table</a>
      </h3>
      <Table columns={5} {...rest}>
        <Header />
        <Rows data={data} />
        {children}
      </Table>
    </>
  )
}
