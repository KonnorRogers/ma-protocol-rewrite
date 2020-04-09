import React from "react"
import { render } from "@testing-library/react"
import MyLink from "./index"

test("Renders without error", () => {
  const { asFragment } = render(<MyLink to="/" />)

  expect(asFragment()).toMatchSnapshot()
})
