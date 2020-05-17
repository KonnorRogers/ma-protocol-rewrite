import * as React from "react"
import { useThemeUI } from "theme-ui"
import * as docz from "docz"
import { Table, TableRow, TableItem, TableCell } from "../../table"
import data from "./data"
import * as styles from "./styles"

export default function FastStrokeScale() {
  const { theme } = useThemeUI()
  return (
    <Table css={styles.tableCss(theme)} style={{ minWidth: "200px" }}>
      <TableRow>
        <TableItem style={{ fontSize: "1.2rem" }}>
          Fast ED Stroke Scale
        </TableItem>
      </TableRow>
      <TableRow style={{ fontSize: "1.1rem" }}>
        <TableItem colspan={4}>Item</TableItem>
        <TableItem> Score </TableItem>
      </TableRow>

      <TableData />
    </Table>
  )
}

function TableData() {
  return data.map(obj => {
    return (
      <React.Fragment key={obj.heading}>
        <TableRow>
          <TableItem colspan={4} className="item-heading">
            {obj.heading}
          </TableItem>
          <TableItem className="item-heading" />
        </TableRow>
        {itemsMap(obj)}
      </React.Fragment>
    )
  })
}

function itemsMap(obj) {
  return obj.items.map((item, index) => {
    return (
      <TableRow key={obj.heading + " " + item}>
        <TableItem className="data-item" colspan={4}>
          {item}
        </TableItem>
        <TableItem>
          <TableCell>{index}</TableCell>
        </TableItem>
      </TableRow>
    )
  })
}
