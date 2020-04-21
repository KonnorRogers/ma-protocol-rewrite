import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"
import { useTableColumns } from "../../hooks/useTableColumns"

export function Table({ children, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]

  if (colormode) {
    colorMode = colormode
  }

  return (
    <div css={styles.table({ minWidth, colorMode })} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  minWidth: PropTypes.string,
}

export function TableRow({ children, heading, css, colormode, ...rest }) {
  const colorMode = colormode || useColorMode()[0]
  const tableColumns = useTableColumns(children)

  const newChildren = updateChildrenWithColumns({
    children,
    tableColumns,
  })

  return (
    <div css={[styles.row({ heading, colorMode }), css]} {...rest}>
      {newChildren}
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
  tableColumns,
  count,
  children,
  align,
  colormode,
  ...rest
}) {
  const colorMode = colormode || useColorMode()[0]

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

/**
 * Updates the children so that they have tableColumns appended to them.
 * @typedef {Object} ReactNode
 * @param {Object} obj - The object to pass into tableColumns
 * @param {ReactNode[]} obj.children - Array of children to map over
 * @param {number} obj.tableColumns - Number of columns to add to each child
 * @return {ReactNode[]} Returns an array of ReactNodes with tableColumns appended to it
 */
function updateChildrenWithColumns({ children, tableColumns }) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { tableColumns: tableColumns })
  })
}
