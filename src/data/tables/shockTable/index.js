import * as React from "react"
import Table, { TableRow, TableItem } from "../../../components/table"
import MyLink from "../../../components/myLink"
import * as styles from "./styles"

const keys = {
  heading: "heading",
  child: "child",
  cardiogenic: "cardiogenic",
  distributive: "distributive",
  hypovolemic: "hypovolemic",
  obstructive: "obstructive",
}

function BaseTable({ children }) {
  return (
    <Table columns={4}>
      <TableRow key={keys.heading} heading={true} css={styles.headings}>
        <TableItem key={keys.cardiogenic}>Cardiogenic Shock</TableItem>
        <TableItem key={keys.distributive}>Distributive Shock</TableItem>
        <TableItem key={keys.hypovolemic}>Hypovolemic Shock</TableItem>
        <TableItem key={keys.obstructive}>Obstructive Shock</TableItem>
      </TableRow>
      {children}
    </Table>
  )
}

export function AdultBasicShockTable(_props) {
  return (
    <BaseTable>
      <TableRow key={keys.child} css={styles.items}>
        <TableItem key={keys.cardiogenic}>
          Assess and treat for pulmonary edema and/or congestive heart failure
          (CHF), per
          <MyLink to="/sections/3/3.06-congestive-heart-failure-pulmonary-edema">
            3.6 Congestive Heart Failure.
          </MyLink>
        </TableItem>
        <TableItem key={keys.distributive}>
          If patient has history of adrenal insufficiency, manage according to
          <MyLink to="/sections/2/2.01-adrenal-insufficiency-crisis">
            2.1 Adrenal Insufficiency.
          </MyLink>
        </TableItem>
        <TableItem key={keys.hypovolemic}>
          Control active bleeding using direct pressure, pressure bandages,
          tourniquets (commercial tourniquets preferred), or hemostatic bandage.
        </TableItem>
        <TableItem key={keys.obstructive} />
      </TableRow>
    </BaseTable>
  )
}

export function AdultAdvancedShockTable(_props) {
  return (
    <BaseTable>
      <TableRow key={keys.child} css={styles.items}>
        <TableItem key={keys.cardiogenic}>
          <ul>
            <li>No fluid bolus</li>
          </ul>
        </TableItem>
        <TableItem key={keys.distributive}>
          <ul>
            <li>
              Total volume administered is to be based on hemodynamic stability.
            </li>
            <li>Consider Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>

        <TableItem key={keys.hypovolemic}>
          <ul>
            <li>
              Total volume administered is determined by hemodynamic stability.
            </li>
            <li>Consider Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>

        <TableItem key={keys.obstructive}>
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

export function AdultParamedicShockTable(_props) {
  return (
    <BaseTable>
      <TableRow key={keys.child} css={styles.items}>
        <TableItem key={keys.cardiogenic}>
          <ul>
            <li>
              Norepinephrine infusion by pump 0.1-0.5 mcg/kg/min IV/IO, titrate
              to goal Systolic Blood Pressure of 90mmHg,
            </li>
            OR
            <li>Epinephrine infusion – 2-10 mcg/min IV/IO,</li>
            OR
            <li>Dopamine 2-20 mcg/kg/min IV/IO</li>
          </ul>
        </TableItem>
        <TableItem key={keys.obstructive}>
          <ul>
            <li>
              Norepinephrine infusion by pump 0.1-0.5 mcg/kg/ min IV/IO, titrate
              to goal Systolic Blood Pressure of 90mmHg,
            </li>
            OR
            <li>Epinephrine infusion – 2-10 mcg/min IV/IO,</li>
            OR
            <li>Dopamine 2-20 mcg/kg/min IV/IO</li>
            <li>
              For patients with confirmed or suspected Adrenal Insufficiency,
              treat per
              <MyLink to="/sections/2/2.01-adrenal-insufficiency-crisis">
                2.1 Adrenal Insufficiency
              </MyLink>
            </li>
          </ul>
        </TableItem>
        <TableItem key={keys.hypovolemic}>
          <ul>
            <li>
              Norepinephrine infusion by pump 0.1-0.5 mcg/kg/ min IV/IO, titrate
              to goal Systolic Blood Pressure of 90mmHg,
            </li>
            OR
            <li>Epinephrine infusion – 2-10 mcg/min IV/IO,</li>
            OR
            <li>Dopamine 2-20 mcg/kg/min IV/IO</li>
          </ul>
        </TableItem>
        <TableItem key={keys.distributive}>
          <ul>
            <li>
              Norepinephrine infusion by pump 0.1-0.5 mcg/kg/ min IV/IO, titrate
              to goal Systolic Blood Pressure of 90mmHg,
            </li>
            OR
            <li>Epinephrine infusion – 2-10 mcg/min IV/IO,</li>
            OR
            <li>Dopamine 2-20 mcg/kg/min IV/IO</li>
            <li>Needle Decompression, if tension pneumothorax suspected</li>
          </ul>
        </TableItem>
      </TableRow>
    </BaseTable>
  )
}

export function PediatricBasicShockTable(_props) {
  return (
    <BaseTable>
      <TableRow key={keys.child} css={styles.items}>
        <TableItem key={keys.cardiogenic}></TableItem>
        <TableItem key={keys.distributive}>
          If patient has history of adrenal insufficiency, manage according to
          protocol
          <MyLink to="/sections/2/2.01-adrenal-insufficiency-crisis">
            2.1 Adrenal Insufficiency.
          </MyLink>
          <br />
          <br />
          If suspected anaphylaxis, manage according to protocol.
          <br />
          <br />
          If neurogenic shock is suspected: Spinal immobilization
        </TableItem>
        <TableItem key={keys.hypovolemic}>
          Control active bleeding using direct pressure, pressure bandages,
          tourniquets (commercial tourniquets preferred), or hemostatic bandage.
        </TableItem>
        <TableItem key={keys.distributive}></TableItem>
      </TableRow>
    </BaseTable>
  )
}

export function PediatricAdvancedShockTable(_props) {
  function DistributiveShock(_props) {
    return (
      <TableItem>
        Obtain vascular access. Therapeutic endpoints to fluid resuscitation (in
        order of importance) are:
        <li>Capillary refill,</li>
        <li>Normal pulses, </li>
        <li>No difference between peripheral and central pulses, </li>
        <li>Warm extremities,</li>
        <li>Normal mental status,</li>
        <li>
          and THEN normal blood pressure. Consider 20 ml/kg Normal Saline fluid
          bolus.
        </li>
      </TableItem>
    )
  }

  function HypovolemicShock(_props) {
    return <DistributiveShock />
  }
  return (
    <BaseTable>
      <TableRow key={keys.child} css={styles.items}>
        <TableItem key={keys.cardiogenic}></TableItem>
        <DistributiveShock key={keys.distributive} />
        <HypovolemicShock key={keys.hypovolemic} />
        <TableItem key={keys.obstructive}>
          <ul>
            <li>Consider 20 ml/kg Normal Saline fluid bolus.</li>
          </ul>
        </TableItem>
      </TableRow>
    </BaseTable>
  )
}

// export function PediatricParamedicShockTable(_props) {
//   return (
//     <BaseTable>
//       <TableRow lastRow={true}>
//         <TableItem></TableItem>
//         <TableItem></TableItem>
//         <TableItem></TableItem>
//         <TableItem></TableItem>
//       </TableRow>
//     </BaseTable>
//   )
// }
