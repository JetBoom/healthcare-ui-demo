import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper,
} from '@material-ui/core'
import moment from 'moment'


const displayRecordsMap = (rec) => {
  // Shallow copy to prevent altering redux state.
  const record = {...rec}

  const time = new Date(rec.timestamp)
  // Convert time stamp to a more readable format.
  record.displayTime = moment(time).format('MM/DD/YYYY HH:mm:ss')
  // For sorting use the UTC time.
  record.time = time.getTime()

  return record
}

const sortRecords = (a, b) => a.time - b.time

export default function RecordsTable({ records }) {
  const displayRecords = records.map(displayRecordsMap)
  displayRecords.sort(sortRecords)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 480 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRecords.map((record, i) => (
            <TableRow key={i}>
              <TableCell>{record.value}</TableCell>
              <TableCell align="right">{record.displayTime}</TableCell>
            </TableRow>
          ))}
          {displayRecords.length === 0 && (
            <TableRow>
              <TableCell align="center" colSpan={2}>No values</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
