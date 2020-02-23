import React from "react"
import { render } from "@testing-library/react"
import NextPage from "./nextPage.js"

test("Should match snapshot", () => {
  const tree = render(<NextPage />)

  expect(tree).toMatchSnapshot()
})
