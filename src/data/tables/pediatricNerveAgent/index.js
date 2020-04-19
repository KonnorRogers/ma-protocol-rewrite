/** @jsx jsx */
import * as React from "react"
import { Table, TableRow, TableItem } from "../../../components/table"
import data from "./data"
import { jsx, css } from "@emotion/core"
import Screen from "../../../utils/screen.js"

function Header() {
  const headerRow = css`
    font-size: 0.65rem;

    ${Screen.small} {
      font-size: 0.75rem;
    }

    ${Screen.large} {
      font-size: 1.1rem;
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

function Row({ object, lastRow, ...props }) {
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
  const rows = data.map((object) => {
    return <Row object={object} key={object.kg.toString()} />
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
        <a href="#pedi-nerve-agent">
          Pediatric Dosing for Nerve Agent Exposures
        </a>
      </h3>
      <Table {...rest}>
        <Header />
        <Rows data={data} />
        {children}
      </Table>
    </>
  )
}
