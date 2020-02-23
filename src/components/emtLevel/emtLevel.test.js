import React from "react"
import { render } from "@testing-library/react"
import EMTLevel from "./emtLevel.js"

test("Matches snapshot", () => {
  const tree = render(
    <EMTLevel level="paramedic">
      <ul>
        <li>Protocols</li>
      </ul>
    </EMTLevel>
  )

  expect(tree).toMatchSnapshot()
})
