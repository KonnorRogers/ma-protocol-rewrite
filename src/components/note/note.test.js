import React from "react"
import { render } from "@testing-library/react"
import Note from "./note.js"

test("Renders without error", () => {
  const { asFragment } = render(<Note id="test-note" />)
  expect(asFragment()).toMatchSnapshot()
})
