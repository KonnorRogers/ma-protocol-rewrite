import React from "react"
import { render } from "@testing-library/react"
import PediatricAtropens from "./index"

describe("PediatricAtropens", () => {
  test("Should render without error", () => {
    const { asFragment } = render(<PediatricAtropens />)
    expect(asFragment()).toMatchSnapshot()
  })
})
