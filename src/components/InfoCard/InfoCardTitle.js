import { Typography } from '@material-ui/core'


/**
 * The title to use inside an InfoCardHeader.
*/
export default function InfoCardTitle({ children }) {
  return <Typography variant="h6">{children}</Typography>
}
