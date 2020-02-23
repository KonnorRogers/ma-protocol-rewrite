import React from "react"
import { render } from "@testing-library/react"
import PrevPage from "./prevPage.js"

test("Should match snapshot", () => {
  const tree = render(<PrevPage />)

  expect(tree).toMatchSnapshot()
})
