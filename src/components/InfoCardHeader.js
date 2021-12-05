import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from './InfoCardHeader.styles'


InfoCardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

function InfoCardHeader({ classes, children }) {
  return (
    <div className={classes.InfoCardHeader}>
      {children}
    </div>
  )
}

export default withStyles(styles)(InfoCardHeader)
