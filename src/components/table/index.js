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

export function TableRow({ children, lastRow, ...rest }) {
  return (
    <div css={styles.row(lastRow)} {...rest}>
      {children}
    </div>
  )
}

TableRow.propsTypes = {
  lastRow: PropTypes.bool,
}

TableRow.defaultProps = {
  lastRow: false,
}

export function TableItem({ children, lastItem, ...rest }) {
  const columns = React.useContext(ColumnContext)

  return (
    <div css={styles.item({ lastItem, columns })} {...rest}>
      {children}
    </div>
  )
}

TableItem.propTypes = {
  lastItem: PropTypes.bool,
}

TableItem.defaultProps = {
  lastItem: false,
}

export default Table
