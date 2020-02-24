import React from "react"
import { render } from "@testing-library/react"
import Note from "./note.js"

test("Renders without error", () => {
  const tree = render(<Note id="test-note" />)
  expect(tree).toMatchSnapshot()
})
