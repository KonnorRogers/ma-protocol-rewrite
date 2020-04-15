import * as React from "react"

/**
 * Custom hook to modify the lastChild in an Array of ReactNodes
 * @typedef ReactNode
 * @param {Array<ReactNode>} children - Children array passed in from React
 * @param {Object} newProperties - Properties to set on the lastChild
 */
export function useLastChild(children, newProperties) {
  if (!Array.isArray(children)) {
    throw "Please pass an array to useLastChildProps"
  }

  let lastChildClone

  React.useEffect(() => {
    const lastChildIndex = children.length - 1
    const lastChild = children[lastChildIndex]
    lastChildClone = React.cloneElement(lastChild, newProperties)
    children[lastChildIndex] = lastChildClone
  }, children)

  return lastChildClone
}
