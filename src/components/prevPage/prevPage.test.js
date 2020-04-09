import React from "react"
import { render } from "@testing-library/react"
import PrevPage from "./index"

test("Renders without error", () => {
  const { asFragment } = render(<PrevPage />)

  expect(asFragment()).toMatchSnapshot()
})
