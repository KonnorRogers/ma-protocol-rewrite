import React from "react"
import { render } from "@testing-library/react"
import AdultAutoInjectors from "./index"

describe("AdultAutoInjector", () => {
  test("Renders without error", () => {
    const { asFragment } = render(<AdultAutoInjectors />)

    expect(asFragment()).toMatchSnapshot()
  })
})
