import React from "react"
import { render } from "@testing-library/react"
import PrevPage from "./prevPage.js"

test("Renders without error", () => {
  const { asFragment } = render(<PrevPage />)

  expect(asFragment()).toMatchSnapshot()
})
