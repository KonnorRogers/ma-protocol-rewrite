import React from "react"
import { render } from "@testing-library/react"
import InformationBox from "./index"

test("Renders without error", () => {
  const { asFragment } = render(<InformationBox borderColor="red" />)
  expect(asFragment()).toMatchSnapshot()
})
