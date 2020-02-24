import React from "react"
import { render } from "@testing-library/react"
import Caution from "./caution.js"

test("Renders without error", () => {
  const tree = render(<Caution />)
  expect(tree).toMatchSnapshot()
})
