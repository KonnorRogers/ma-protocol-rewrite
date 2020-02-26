import React from "react"
import { render } from "@testing-library/react"
import InformationBox from "./informationBox.js"

test("Renders without error", () => {
  const { asFragment } = render(<InformationBox borderColor="red" />)
  expect(asFragment).toMatchSnapshot()
})
