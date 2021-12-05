import { withStyles } from '@material-ui/core/styles'
import styles from './Page.styles'


function Page({ classes, children }) {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
}

export default withStyles(styles)(Page)
