import React from "react"
import { render } from "@testing-library/react"
import InformationBox from "./informationBox.js"

test("Renders without error", () => {
  const tree = render(<InformationBox />)
  expect(tree).toMatchSnapshot()
})
