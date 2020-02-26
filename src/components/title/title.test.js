import React from "react"
import { render } from "@testing-library/react"
import Title from "./title.js"

// Mocked hook
import { setCurrentDoc } from "docz"

jest.mock("docz")

test("Renders without error when given a title", () => {
  setCurrentDoc(1)
  const { asFragment } = render(<Title title="Title Test" />)

  expect(asFragment).toMatchSnapshot()
})

test("Renders without error when not given a title for 1st doc", () => {
  setCurrentDoc(0)
  const { asFragment } = render(<Title />)
  expect(asFragment).toMatchSnapshot()
})

test("Renders without error when not given a title for 2nd doc", () => {
  setCurrentDoc(1)
  const { asFragment } = render(<Title />)
  expect(asFragment).toMatchSnapshot()
})

test("Renders without error when not given a title for 3rd doc", () => {
  setCurrentDoc(2)
  const { asFragment } = render(<Title />)
  expect(asFragment).toMatchSnapshot()
})
