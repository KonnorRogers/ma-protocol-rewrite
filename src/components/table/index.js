import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"
import { useLastChild } from "../../hooks/useLastChild"
// import { useTableColumns } from "../../hooks/useTableColumns"

function Table({ children, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]

  // Used to override the useColorMode hook for specific circumstances
  if (colormode) {
    colorMode = colormode
  }

  // const newChildren = useLastChild(children, {
  //   lastRow: true,
  // })

  // children = newChildren

  return (
    <div css={styles.table({ minWidth, colorMode })} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  minWidth: PropTypes.string,
}

let tableColumns

export function TableRow({
  children,
  heading,
  lastRow,
  css,
  colormode,
  ...rest
}) {
  // const [columns, setColumns] = React.useState(0)
  let columns = 0

  // React.useEffect(() => {
  React.Children.forEach(children, (child) => {
    // setColumns(columns + child.colspan)
    columns += 1
  })
  // }, children)

  // Hack
  tableColumns = columns

  const colorMode = colormode || useColorMode()[0]
  return (
    <div css={[styles.row({ lastRow, heading, colorMode }), css]} {...rest}>
      {children}
    </div>
  )
}

TableRow.propTypes = {
  heading: PropTypes.bool,
  lastRow: PropTypes.bool,
}

TableRow.defaultProps = {
  heading: false,
  lastRow: false,
}

export function TableItem({
  colspan,
  children,
  align,
  lastItem,
  colormode,
  ...rest
}) {
  // hack
  const columns = tableColumns

  const colorMode = colormode || useColorMode()[0]

  return (
    <div
      css={styles.item({ colspan, lastItem, align, columns, colorMode })}
      {...rest}
    >
      {children}
    </div>
  )
}

TableItem.propTypes = {
  lastItem: PropTypes.bool,
  align: PropTypes.string,
  colspan: PropTypes.number,
}

TableItem.defaultProps = {
  lastItem: false,
  align: "center",
  colspan: 1,
}

export function TableCell({ children, ...rest }) {
  return (
    <div css={styles.tableCell} {...rest}>
      {children}
    </div>
  )
}

export default Table
