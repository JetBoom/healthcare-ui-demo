import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from './InfoCardGrid.styles'


InfoCardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
}

function InfoCardGrid({ classes, children }) {
  return (
    <div className={classes.InfoCardGrid}>
      {children}
    </div>
  )
}

export default withStyles(styles)(InfoCardGrid)
