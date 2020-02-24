import React from "react"
import { render } from "@testing-library/react"
import Title from "./title.js"

test("Renders without error", () => {
  const tree = render(<Title title="Title Test" />)

  expect(tree).toMatchSnapshot()
})
