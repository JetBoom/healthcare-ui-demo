import { CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from './Loading.styles'


Loading.propTypes = {
  classes: PropTypes.object.isRequired,
}

/**
 * A full screen (sans navigation menu) loading spinner.
 * Automatically sizes itself to fit the screen in a nice way.
*/
function Loading({ classes }) {
  return (
    <div className={classes.root} data-testid="loading">
      <CircularProgress className={classes.progress} />
    </div>
  )
}

export default withStyles(styles)(Loading)
