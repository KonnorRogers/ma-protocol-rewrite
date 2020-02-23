import React from "react"
import { render } from "@testing-library/react"
import PageNav from "./pageNav.js"

jest.mock("docz")

test("Should match snapshot", () => {
  const tree = render(<PageNav />)

  expect(tree).toMatchSnapshot()
})
