import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import MyLink from "../../../components/myLink"
import * as styles from "./styles"

function BaseTable({ children }) {
  return (
    <Table columns={4}>
      <TableRow heading={true} css={styles.headings}>
        <TableItem>Cardiogenic Shock</TableItem>
        <TableItem>Distributive Shock</TableItem>
        <TableItem>Hypovolemic Shock</TableItem>
        <TableItem>Obstructive Shock</TableItem>
      </TableRow>
      {children}
    </Table>
  )
}

export function BasicShockTable(_props) {
  return (
    <BaseTable>
      <TableRow css={styles.items}>
        <TableItem>
          Assess and treat for pulmonary edema and/or congestive heart failure
          (CHF), per
          <MyLink to="/sections/3/3.06-congestive-heart-failure-pulmonary-edema">
            3.6 Congestive Heart Failure.
          </MyLink>
        </TableItem>
        <TableItem>
          If patient has history of adrenal insufficiency, manage according to
          <MyLink to="/sections/2/2-1-adrenal-insufficiency-crisis">
            2.1 Adrenal Insufficiency.
          </MyLink>
        </TableItem>
        <TableItem>
          Control active bleeding using direct pressure, pressure bandages,
          tourniquets (commercial tourniquets preferred), or hemostatic bandage.
        </TableItem>
        <TableItem />
      </TableRow>
    </BaseTable>
  )
}

export function AdvancedShockTable(_props) {
  return (
    <BaseTable>
      <TableRow lastRow={true} css={styles.items}>
        <TableItem>
          <ul>
            <li>No fluid bolus</li>
          </ul>
        </TableItem>
        <TableItem>
          <ul>
            <li>
              Total volume administered is to be based on hemodynamic stability.
            </li>
            <li>Consider Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>

        <TableItem>
          <ul>
            <li>
              Total volume administered is determined by hemodynamic stability.
            </li>
            <li>Consider Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>

        <TableItem lastItem={true}>
          <ul>
            <li>
              Total volume administered is to be based on hemodynamic stability.
            </li>
            <li>Consider Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>
      </TableRow>
    </BaseTable>
  )
}
