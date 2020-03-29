/** @jsx jsx */
import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import data, { ENUMS } from "./data"
import { jsx, css } from "@emotion/core"
import Screen from "../../../utils/screen.js"

function TableHeader() {
  return data.map((obj, index) => {
    let lastRow = false
    if (index >= data.length - 1) {
      lastRow = true
    }
  })
}
