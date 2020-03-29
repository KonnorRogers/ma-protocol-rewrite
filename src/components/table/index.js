import * as React from "react"
import * as styles from "./styles"
import PropTypes from "prop-types"

let ColumnContext

function Table({ columns, children, ...rest }) {
  ColumnContext = React.createContext(columns)

  return (
    <div css={styles.table} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.number.isRequired,
}

export function TableRow({ children, heading, lastRow, css, ...rest }) {
  return (
    <div css={[styles.row(lastRow, heading), css]} {...rest}>
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

export function TableItem({ children, align, lastItem, ...rest }) {
  const columns = React.useContext(ColumnContext)

  return (
    <div css={styles.item({ lastItem, align, columns })} {...rest}>
      {children}
    </div>
  )
}

TableItem.propTypes = {
  lastItem: PropTypes.bool,
  align: PropTypes.string,
}

TableItem.defaultProps = {
  lastItem: false,
  align: "center",
}

export function TableCell({ children, ...rest }) {
  return (
    <div css={styles.tableCell} {...rest}>
      {children}
    </div>
  )
}

export default Table
