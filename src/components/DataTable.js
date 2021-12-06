import DataTable, { createTheme } from 'react-data-table-component'
import { palette } from 'AppTheme'


createTheme('hcare', palette)


/**
 * DataTable from react-data-table-component library, with our theme's palette applied.
 *
 * All props are forwarded.
 */
export default function StyledDataTable(props) {
  return <DataTable theme="hcare" {...props} />
}
