import * as React from "react"

/**
 * Custom hook to modify the lastChild in an Array of ReactNodes
 * @typedef ReactNode
 * @param {Array<ReactNode>} children - Children array passed in from React
 * @param {Object} newProperties - Properties to set on the lastChild
 * @return {Array<ReactNode,Function>} - Returns lastChild and setLastChild
 */
export function useLastChild(children, newProperties) {
  const lastChildIndex = children.length - 1
  const origLastChild = children[lastChildIndex]

  const [lastChild, setLastChild] = React.useState(() =>
    React.cloneElement(origLastChild, newProperties)
  )

  React.useEffect(() => {
    const childCount = React.Children.count(children)

    if (childCount <= 0) {
      return
    }

    if (childCount === 1) {
      setLastChild(React.cloneElement(children, newProperties))
      return
    }

    setLastChild(React.cloneElement(origLastChild, newProperties))
  }, [children])

  return [lastChild, setLastChild]
}
