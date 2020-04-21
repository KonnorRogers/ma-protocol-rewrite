import * as React from "react"

/**
 * This is to be used at the top level Table. It will traverse two layers
 * down into <TableItem />. It will not read the first layer of children.
 *
 * @typedef ReactNode
 * @param {Array<ReactNode>} children - React node children to iterate over
 * @param {number} [columns=0] - Number of columns
 * @return {number} - Returns [tableColumns, setTableColumns]
 */
export function useTableColumns(children, columns = 0) {
  const [tableColumnCount, setTableColumnCount] = React.useState(columns)

  React.useEffect(() => {
    React.Children.forEach(children, (child) => {
      setTableColumnCount((prevCount) => (prevCount += child.props.colspan))
    })

    return () => {
      setTableColumnCount(columns)
    }
  }, [children])

  return tableColumnCount
}
