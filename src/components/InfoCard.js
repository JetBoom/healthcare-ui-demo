import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styles from './InfoCard.styles'


InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.string,
}

InfoCard.defaultProps = {
  size: 'md',
}

/**
 * Base component to display info or data points in a grid.
*/
function InfoCard({ classes, children, size }) {
  return (
    <section className={classes.InfoCard} data-size={size}>
      {children}
    </section>
  )
}

export default withStyles(styles)(InfoCard)
