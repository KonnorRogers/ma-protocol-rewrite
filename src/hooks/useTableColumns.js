import * as React from "react"

export function useTableColumns(children, columns = 0) {
  const [tableColumns, setTableColumns] = React.useState(columns)

  if (!children) {
    return [tableColumns, setTableColumns]
  }

  React.useEffect(() => {
    React.Children.forEach((child) => {
      setTableColumns((prevColumns) => prevColumns + child.colspan)
    })
  }, children)

  console.log(tableColumns)

  return [tableColumns, setTableColumns]
}
