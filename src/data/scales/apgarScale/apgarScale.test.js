import * as React from "react"
import { render } from "@testing-library/react"
import ApgarScale from "./index"

describe("ApgarScale()", () => {
  test("Should render without error", () => {
    const { asFragment } = render(<ApgarScale />)

    expect(asFragment()).toMatchSnapshot()
  })
})
