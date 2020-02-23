import React from "react"
import { render } from "@testing-library/react"
import Footer from "./footer.js"

test("Should match snapshot", () => {
  const tree = render(<Footer />)

  expect(tree).toMatchSnapshot()
})
