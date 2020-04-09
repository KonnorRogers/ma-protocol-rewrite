import React from "react"
import { render } from "@testing-library/react"
import Note from "./index"

test("Renders without error", () => {
  const { asFragment } = render(<Note id="test-note" />)
  expect(asFragment()).toMatchSnapshot()
})
