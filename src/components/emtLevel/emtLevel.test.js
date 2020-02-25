import React from "react"
import { render } from "@testing-library/react"
import EMTLevel from "./emtLevel.js"

test("Renders without error", () => {
  const tree = render(
    <EMTLevel level="paramedic">
      <ul>
        <li>Protocols</li>
      </ul>
    </EMTLevel>
  )

  expect(tree).toMatchSnapshot()
})

test("Renders med control without error", () => {
  const tree = render(
    <EMTLevel level="advanced" medControl={true}>
      <ul>
        <li>More Protocols</li>
      </ul>
    </EMTLevel>
  )
})
