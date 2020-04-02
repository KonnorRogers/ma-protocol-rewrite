import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

let TableContext

function Table({ columns, children, minWidth, ...rest }) {
  const colorMode = useColorMode()[0]
  TableContext = React.createContext({ columns, colorMode })

  return (
    <div css={styles.table(minWidth)} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.number.isRequired,
}

export function TableRow({ children, heading, lastRow, css, ...rest }) {
  const colorMode = React.useContext(TableContext).colorMode
  return (
    <div css={[styles.row({ lastRow, heading, colorMode }), css]} {...rest}>
      {children}
    </div>
  )
}

TableRow.propsTypes = {
  heading: PropTypes.bool,
  lastRow: PropTypes.bool,
}

TableRow.defaultProps = {
  heading: false,
  lastRow: false,
}

export function TableItem({ colspan, children, align, lastItem, ...rest }) {
  const columns = React.useContext(TableContext).columns
  const colorMode = React.useContext(TableContext).colorMode

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
