import * as React from "react"

/**
 * Custom hook to modify the lastChild in an Array of ReactNodes
 * @typedef ReactNode
 * @param {Array<ReactNode>} children - Children array passed in from React
 * @param {Object} newProperties - Properties to set on the lastChild
 * @return {Array<ReactNode,Function>} - Returns lastChild and setLastChild
 */
export function useLastChild(children, newProperties) {
  const [lastChild, setLastChild] = React.useState(null)

  const childCount = React.Children.count(children)

  if (childCount <= 0) {
    return [lastChild, setLastChild]
  }

  if (childCount === 1) {
    React.useEffect(() => {
      setLastChild(React.cloneElement(children, newProperties))
    }, [children])
    return [lastChild, setLastChild]
  }

  const lastChildIndex = children.length - 1
  const origLastChild = children[lastChildIndex]

  React.useEffect(() => {
    setLastChild(React.cloneElement(origLastChild, newProperties))
  }, [children])

  return [lastChild, setLastChild]
}
