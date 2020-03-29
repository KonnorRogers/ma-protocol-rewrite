import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

let TableContext

function Table({ columns, children, ...rest }) {
  const [colorMode, _setColorMode] = useColorMode()
  TableContext = React.createContext({ columns, colorMode })

  return (
    <div css={styles.table(colorMode)} {...rest}>
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

export function TableItem({ children, align, lastItem, ...rest }) {
  const columns = React.useContext(TableContext).columns
  const colorMode = React.useContext(TableContext).colorMode

  return (
    <div css={styles.item({ lastItem, align, columns, colorMode })} {...rest}>
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
