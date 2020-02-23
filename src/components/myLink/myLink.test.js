import React from "react"
import { render } from "@testing-library/react"
import MyLink from "./myLink.js"

test("Should match snapshot", () => {
  const tree = render(<MyLink />)

  expect(tree).toMatchSnapshot()
})
