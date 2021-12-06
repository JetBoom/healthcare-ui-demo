import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from './InfoCard.styles'


InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Size of the card on the grid.*/
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
  /** Disable animations/effects when mousing over the card.*/
  noEffects: PropTypes.bool,
}

InfoCard.defaultProps = {
  size: 'md',
}

/**
 * Wrapper component to display arbitrary data in an InfoCardGrid
*/
function InfoCard({ classes, children, size, noEffects }) {
  return (
    <section className={classes.InfoCard} data-size={size} data-noeffects={noEffects ? 1 : 0}>
      {children}
    </section>
  )
}

export default withStyles(styles)(InfoCard)
