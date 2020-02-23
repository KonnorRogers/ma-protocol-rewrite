import React from "react"
import { render } from "@testing-library/react"
import Caution from "./caution.js"

test("Matches previous snapshot", () => {
  const tree = render(<Caution />)
  expect(tree).toMatchSnapshot()
})
