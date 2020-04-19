import { Table, TableItem, TableCell, TableRow } from "../../components/table"

export default function OrganophosphateTable(_props) {
  return (
    <Table>
      <TableRow heading={true}>
        <TableItem>Severity</TableItem>
        <TableItem>Signs & Symptoms</TableItem>
        <TableItem>Adult Treatment</TableItem>
      </TableRow>

      <TableRow>
        <TableItem>
          <TableCell>Mild</TableCell>
        </TableItem>
        <TableItem align="left">
          <div>Runny Nose</div>
          <div>Cough</div>
          <div>Pupils may be pinpoint</div>
          <div>Eye Pain</div>
          <div>Lacrimation</div>
        </TableItem>
        <TableItem align="left">
          <div>Decontaminate</div>
          <div>Administer 100% Oxygen</div>
          <div>
            Administer One kit IM <strong> OR </strong>
          </div>
          <div>2mg atropine IM only & either:</div>
          <div>600mg IM pralidoximine OR</div>
          <div>1g IV pralidoximine</div>
        </TableItem>
      </TableRow>
      <TableRow>
        <TableItem>
          <TableCell>Moderate</TableCell>
        </TableItem>
        <TableItem align="left">
          <div>Runny Nose</div>
          <div>Cough</div>
          <div>Sweating, twitching</div>
          <div>Nausea, abdominal cramping</div>
          <div>Weakness</div>
          <div>Localized sweating (seen with dermal exposure)</div>
          <div>Eye pain, trouble seeing </div>
          <div>Wheezing, shortness of breath</div>
        </TableItem>
        <TableItem align="left">
          <div>Decontaminate</div>
          <div>Administer 100% Oxygen</div>
          <div>
            Administer <strong>Two to Three kits</strong> IM
          </div>
          <div>OR</div>
          <div>
            4mg atropine IM <strong>only</strong> & either:
          </div>
          <div>600-1200mg IM pralidoxime OR</div>
          <div>1gm IV pralidoxime</div>
        </TableItem>
      </TableRow>
      <TableRow>
        <TableItem>
          <TableCell>Severe</TableCell>
        </TableItem>
        <TableItem align="left" style={{ paddingLeft: "1.25rem" }}>
          All the above, plus:
          <ul>
            <li>Vomiting</li>
            <li>Diarrhea</li>
            <li>Drooling, copious respiratory secretions</li>
            <li>Significant weakness</li>
            <li>Seizures</li>
            <li>Decreased level of consciousness</li>
            <li>Apnea</li>
          </ul>
        </TableItem>
        <TableItem align="left">
          <div>Decontaminate</div>
          <div>Administer 100% Oxygen</div>
          <div>Administer Three kits IM</div>
          <div>OR</div>
          <div>6mg atropine IM only & either:</div>
          <div>1200-1800mg IM pralidoxime OR</div>
          <div>1gm IV pralidoxime</div>
          <div>&</div>
          <div>Diazepam 10mg IM Autoinjector (CANA Kit) </div>
          <div>OR</div>
          <div>Midazolam 6-10mg IV/IO/IM</div>
        </TableItem>
      </TableRow>
    </Table>
  )
}
