import React from "react"
import { render } from "@testing-library/react"
import Note from "./note.js"

test("Should match snapshot", () => {
  const tree = render(<Note />)

  expect(tree).toMatchSnapshot()
})
