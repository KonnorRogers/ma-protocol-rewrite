import * as React from "react"
import { render } from "@testing-library/react"
import { Table, TableCell, TableRow, TableItem } from "./index.js"

// Mocked colorMode hook
import { setColorMode } from "theme-ui"

function renderTable() {
  return render(
    <Table>
      <TableRow heading={true}>
        <TableItem> Hi there </TableItem>
        <TableItem> Hi there </TableItem>
        <TableItem> Hi there </TableItem>
        <TableItem> Hi there </TableItem>
      </TableRow>
      <TableRow>
        <TableItem>Yo dawg</TableItem>
        <TableItem>Yo dawg</TableItem>
        <TableItem>Yo dawg</TableItem>
        <TableItem>Yo dawg</TableItem>
      </TableRow>
      <TableRow>
        <TableItem>
          <TableCell>Table Cell for centering</TableCell>
        </TableItem>
        <TableItem>Testing 123</TableItem>
        <TableItem>Testing 123</TableItem>
        <TableItem>Testing 123</TableItem>
      </TableRow>
    </Table>
  )
}

describe("Table components", () => {
  test("Should properly render a table with darkMode", () => {
    setColorMode("dark")
    const { asFragment } = renderTable()

    expect(asFragment()).toMatchSnapshot()
  })
  test("Should properly render a table with lightMode", () => {
    setColorMode("light")
    const { asFragment } = renderTable()

    expect(asFragment()).toMatchSnapshot()
  })
})
