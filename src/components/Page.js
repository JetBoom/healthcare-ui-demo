import { withStyles } from '@material-ui/core/styles'
import styles from './Page.styles'


/**
 * Base page component for all displayed info.
 * Everything displayed to the user should be inside one of these.
*/
function Page({ classes, children }) {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Page)
