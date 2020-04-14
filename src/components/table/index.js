import * as React from "react"
import * as styles from "./styles.js"
import PropTypes from "prop-types"
import { useColorMode } from "theme-ui"

const TableContext = React.createContext(null)

function Table({ children, minWidth, colormode, ...rest }) {
  let colorMode = useColorMode()[0]

  // Used to override the useColorMode hook for specific circumstances
  if (colormode) {
    colorMode = colorMode
  }

  const count = React.Children.count(children)
  const columns = count
  const lastChildIdx = count - 1

  React.useEffect(() => {
    const childAry = [...children]

    const lastChild = childAry[lastChildIdx]
    const lastChildClone = React.cloneElement(lastChild, { lastRow: false })

    childAry[lastChildIdx] = lastChildClone
    children = childAry
    console.log([...children][lastChildIdx].props.lastRow)
  })

  // React.useEffect(() => {
  //   // console.log(React.Children.map(children, (child) => child)[-1])
  //   console.log([...children])
  // }, [children])
  return (
    <TableContext.Provider value={{ colorMode, columns }}>
      <div css={styles.table({ minWidth, colorMode })} {...rest}>
        {children}
      </div>
    </TableContext.Provider>
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
  const colorMode = colormode || React.useContext(TableContext).colorMode
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
  const columns = React.useContext(TableContext).columns

  const colorMode = colormode || React.useContext(TableContext).colorMode

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
