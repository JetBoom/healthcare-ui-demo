import DataTable, { createTheme } from 'react-data-table-component'
import { palette } from 'AppTheme'


createTheme('hcare', palette)

export default function StyledDataTable(props) {
  return <DataTable theme="hcare" {...props} />
}
