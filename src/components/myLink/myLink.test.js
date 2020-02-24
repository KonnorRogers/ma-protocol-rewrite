import React from "react"
import { render } from "@testing-library/react"
import MyLink from "./myLink.js"

test("Renders without error", () => {
  const tree = render(<MyLink to="/" />)

  expect(tree).toMatchSnapshot()
})
