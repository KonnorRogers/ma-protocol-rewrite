import * as React from "react"
import { useColorMode } from "theme-ui"
import { Table, TableItem, TableCell, TableRow } from "../../table"
import * as styles from "./styles"

export default function StrokeAlertCriteria(_props) {
  return (
    <div css={styles.wrapper}>
      <Table>
        <CriteriaHeading />
        <CriteriaData />
      </Table>
      <div css={styles.additionalVitals}>
        <TimeLastKnownWell />
        <BloodGlucoseLevel />
      </div>
    </div>
  )
}

function CriteriaHeading(_props) {
  return (
    <TableRow>
      <TableItem style={{ textAlign: "center" }}>
        <strong>STROKE ALERT! Criteria:</strong>
      </TableItem>
    </TableRow>
  )
}

function CriteriaData(_props) {
  const colorMode = useColorMode()[0]
  return (
    <>
      <TableRow>
        <TableItem></TableItem>
        <TableItem>Yes</TableItem>
        <TableItem>No</TableItem>
        <TableItem>Unknown</TableItem>
      </TableRow>

      <TableRow>
        <TableItem>Time last known well (TLKW) &lt;5hours?</TableItem>
        <ThreeSquares />
      </TableRow>

      <TableRow>
        <TableItem>
          Any abnormal finding not attributable to head trauma?
        </TableItem>
        <ThreeSquares />
      </TableRow>

      <TableRow>
        <TableItem>Blood Glucose &gt;60?</TableItem>
        <ThreeSquares />
      </TableRow>
    </>
  )
}

function ThreeSquares(_props) {
  return (
    <>
      <Square />
      <Square />
      <Square />
    </>
  )
}

function Square() {
  const colorMode = useColorMode()[0]
  const color = colorMode === "dark" ? "white" : "black"
  return (
    <TableItem>
      <TableCell>
        <div css={styles.square(color)}></div>
      </TableCell>
    </TableItem>
  )
}

function TimeLastKnownWell() {
  return (
    <div>
      <div>Time Last Known Well:</div>
      <div css={styles.entryBox}></div>
    </div>
  )
}

function BloodGlucoseLevel() {
  return (
    <div>
      <div>Blood Glucose Level:</div>
      <div css={styles.entryBox}></div>
    </div>
  )
}
