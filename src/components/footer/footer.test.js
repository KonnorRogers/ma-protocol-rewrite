import React from "react"
import { render } from "@testing-library/react"
import { PureFooter as Footer } from "./footer.js"

test("Renders without error", () => {
  const data = {
    site: {
      siteMetadata: {
        author: "Konnor Rogers",
      },
    },
  }
  const tree = render(<Footer data={data} />)
  expect(tree).toMatchSnapshot()
})
