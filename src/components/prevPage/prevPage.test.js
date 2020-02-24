import React from "react"
import { render } from "@testing-library/react"
import PrevPage from "./prevPage.js"

test("Renders without error", () => {
  const tree = render(<PrevPage />)

  expect(tree).toMatchSnapshot()
})
