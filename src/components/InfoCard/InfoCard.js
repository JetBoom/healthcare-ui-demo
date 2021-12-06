import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import styles from './InfoCard.styles'


InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
  noEffects: PropTypes.bool,
}

InfoCard.defaultProps = {
  size: 'md',
}

/**
 * Base component to display info or data points in a grid.
*/
function InfoCard({ classes, children, size, noEffects }) {
  return (
    <section className={classes.InfoCard} data-size={size} data-noeffects={noEffects ? 1 : 0}>
      {children}
    </section>
  )
}

export default withStyles(styles)(InfoCard)
