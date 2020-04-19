import * as React from "react"
import { data, headers } from "./data"
import { Table, TableRow, TableItem } from "../../../components/table"
import * as styles from "./styles"

function TableHeader(_props) {
  const objects = Object.entries(headers)

  function Items(_props) {
    return objects.map((ary, index) => {
      const [key, value] = ary
      let lastItem = false

      if (index >= objects.length - 1) {
        lastItem = true
      }

      return (
        <TableItem lastItem={lastItem} key={key.toString()}>
          {value}
        </TableItem>
      )
    })
  }

  return (
    <TableRow heading={true} css={styles.header}>
      {React.Children.toArray(Items())}
    </TableRow>
  )
}

function TableData(_props) {
  return data.map((obj, index) => {
    const { age, weight, autoinjectors, atropine, pralidoxime } = obj
    let lastRow = false

    if (index >= data.length - 1) {
      lastRow = true
    }

    return (
      <TableRow key={age.toString()} lastRow={lastRow} css={styles.item}>
        <TableItem>{age}</TableItem>
        <TableItem>{weight}</TableItem>
        <TableItem>{autoinjectors}</TableItem>
        <TableItem>{atropine}</TableItem>
        <TableItem lastItem={true}>{pralidoxime}</TableItem>
      </TableRow>
    )
  })
}

function AdultAutoInjectors(_props) {
  return (
    <>
      <h3
        id="adult-auto-injectors"
        align="center"
        style={{ marginTop: "2rem" }}
      >
        <a href="#adult-auto-injectors">Adult AutoInjectors</a>
      </h3>
      <p>
        Pediatric Dosing for SEVERE Nerve Agent Toxicity Using Adult
        Autoinjectors (i.e. seizures, hypotension, coma, cardiac arrest).
        <br />
        Use only if Pediatric Atropen or when Atropine/Pralidoxime vials are not
        available
      </p>
      <Table>
        <TableHeader />
        <TableData />
      </Table>
    </>
  )
}

export default AdultAutoInjectors
