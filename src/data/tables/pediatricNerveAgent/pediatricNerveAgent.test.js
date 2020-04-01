import * as React from "react"
import { render } from "@testing-library/react"
import PediatricNerveAgent from "./index"

describe("PediatricNerveAgent", () => {
  test("Renders without error", () => {
    const { asFragment } = render(<PediatricNerveAgent />)

    expect(asFragment()).toMatchSnapshot()
  })
})
