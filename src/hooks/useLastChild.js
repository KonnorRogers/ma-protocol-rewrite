import * as React from "react"

/**
 * Custom hook to modify the lastChild in an Array of ReactNodes
 * @typedef ReactNode
 * @param {Array<ReactNode>} children - Children array passed in from React
 * @param {Object} newProperties - Properties to set on the lastChild
 * @return {Array<ReactNode>} - Returns an update children array
 */
export function useLastChild(children, newProperties = {}) {
  if (!Array.isArray(children)) {
    throw "Please pass an array to useLastChild()"
  }

  const lastChild = children[lastChildIndex]
  const lastChildIndex = children.length - 1
  const lastChildClone = React.cloneElement(lastChild, newProperties)

  const [lastChild, setLastChild] = React.useState(() => lastChildClone)

  const newChildren = React.Children.map((child, index) => {
    if (index === lastChildIndex) {
      return lastChildClone
    }

    return child
  })

  return newChildren
}
