import React from "react"
import { render } from "@testing-library/react"
import Footer from "./footer.js"

test("Renders without error", () => {
  const tree = render(<Footer />)

  expect(tree).toMatchSnapshot()
})
