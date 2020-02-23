import React from "react"
import { render } from "@testing-library/react"
import InformationBox from "./informationBox.js"

test("Should match snapshot", () => {
  const tree = render(<InformationBox />)
  expect(tree).toMatchSnapshot()
})
