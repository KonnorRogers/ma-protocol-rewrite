import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

const TableContext = React.createContext({ columns: 1 })

/**
 * A basic table
 */
export function Table({ children, columns, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]

  if (colormode) {
    colorMode = colormode
  }

  return (
    <TableContext.Provider value={{ columns: columns }}>
      <div css={styles.table({ minWidth, colorMode })} {...rest}>
        {children}
      </div>
    </TableContext.Provider>
  )
}

Table.propTypes = {
  columns: PropTypes.number.isRequired,
  minWidth: PropTypes.string,
}

export function TableRow({ children, heading, css, colormode, ...rest }) {
  const colorMode = colormode || useColorMode()[0]

  return (
    <div css={[styles.row({ heading, colorMode }), css]} {...rest}>
      {children}
    </div>
  )
}

TableRow.propTypes = {
  heading: PropTypes.bool,
}

TableRow.defaultProps = {
  heading: false,
}

export function TableItem({
  colspan,
  count,
  children,
  align,
  colormode,
  ...rest
}) {
  const colorMode = colormode || useColorMode()[0]

  const tableColumns = React.useContext(TableContext).columns

  return (
    <div
      css={styles.item({ colspan, align, tableColumns, colorMode })}
      {...rest}
    >
      {children}
    </div>
  )
}

TableItem.propTypes = {
  align: PropTypes.string,
  colspan: PropTypes.number,
}

TableItem.defaultProps = {
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
