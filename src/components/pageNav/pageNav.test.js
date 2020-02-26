import React from "react"
import { render } from "@testing-library/react"
import PageNav from "./pageNav.js"

// Mocked hook
import { setCurrentDoc } from "docz"

jest.mock("docz")

test("Renders without error for 1st doc", () => {
  setCurrentDoc(0)
  const { asFragment } = render(<PageNav />)

  expect(asFragment).toMatchSnapshot()
})

test("Renders without error for 2nd doc", () => {
  setCurrentDoc(1)
  const { asFragment } = render(<PageNav />)

  expect(asFragment).toMatchSnapshot()
})

test("Renders without error for 3rd doc", () => {
  setCurrentDoc(2)
  const { asFragment } = render(<PageNav />)

  expect(asFragment).toMatchSnapshot()
})
