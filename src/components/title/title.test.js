import React from "react"
import { render } from "@testing-library/react"
import Title from "./title.js"

test("Should match snapshot", () => {
  const tree = render(<Title />)

  expect(tree).toMatchSnapshot()
})
