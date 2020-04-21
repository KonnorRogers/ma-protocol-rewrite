import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"
import { useLastChild } from "../../hooks/useLastChild"
import { useTableColumns } from "../../hooks/useTableColumns"

export function Table({ children, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]
  const [lastChild, setLastChild] = useLastChild(children, { lastRow: true })

  if (colormode) {
    colorMode = colormode
  }

  children = updateLastChild(children, lastChild)
  // console.log(children)

  return (
    <div css={styles.table({ minWidth, colorMode })} {...rest}>
      {children}
    </div>
  )
}

Table.propTypes = {
  minWidth: PropTypes.string,
}

export function TableRow({
  children,
  heading,
  lastRow,
  css,
  colormode,
  ...rest
}) {
  const colorMode = colormode || useColorMode()[0]
  const tableColumns = useTableColumns(children)
  const [lastChild, setLastChild] = useLastChild(children, { lastItem: true })

  const newChildren = updateChildrenWithColumns({
    children,
    tableColumns,
    lastChild,
  })

  return (
    <div css={[styles.row({ lastRow, heading, colorMode }), css]} {...rest}>
      {newChildren}
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
  tableColumns,
  count,
  children,
  align,
  lastItem,
  colormode,
  ...rest
}) {
  const colorMode = colormode || useColorMode()[0]

  return (
    <div
      css={styles.item({ colspan, lastItem, align, tableColumns, colorMode })}
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

/**
 * Updates the children so that they have tableColumns appended to them.
 * @typedef {Object} ReactNode
 * @param {Object} obj - The object to pass into tableColumns
 * @param {ReactNode[]} obj.children - Array of children to map over
 * @param {number} obj.tableColumns - Number of columns to add to each child
 * @param {ReactNode} obj.lastChild - The last child of children updated with last{Row,Item}
 * @return {ReactNode[]} Returns an array of ReactNodes with tableColumns appended to it
 */
function updateChildrenWithColumns({ children, tableColumns, lastChild }) {
  return React.Children.map(children, (child, index) => {
    if (index >= children.length - 1) {
      return React.cloneElement(lastChild, { tableColumns: tableColumns })
    }
    return React.cloneElement(child, { tableColumns: tableColumns })
  })
}

/**
 * Updates the lastChild in the children array
 * @param {Object[]} children - An array of ReactNodes
 * @param {Object} lastChild - A ReactNode to be put in as the final child
 * @return {Object[]} - Returns an updated array of children
 */
function updateLastChild(children, lastChild) {
  return React.Children.map(children, (child, index) => {
    if (index >= children.length - 1) {
      return React.cloneElement(lastChild)
    }

    return React.cloneElement(child)
  })
}
