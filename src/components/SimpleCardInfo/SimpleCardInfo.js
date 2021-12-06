import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './SimpleCardInfo.styles'


SimpleCardInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  /** Raw data to display. If it's a number it will be formatted with commas.*/
  data: PropTypes.any.isRequired,
  /** If **data** is a number then this will make it formatted as currency.*/
  isCurrency: PropTypes.bool,
  /** Text to describe what the data is.*/
  text: PropTypes.string,
  /** Icon component to display next to the data.*/
  icon: PropTypes.node,
  /** Color of the icon.*/
  iconColor: PropTypes.string,
}

SimpleCardInfo.defaultProps = {
  iconColor: 'black',
}

/**
 * Component for displaying common number (or other) data inside of an InfoCard.
 *
 * Can display text, numbers, currency, or arbitrary components.
*/
function SimpleCardInfo({ classes, data, isCurrency, text, icon, iconColor }) {
  if (typeof data === 'number') {
    const localeOptions = {}
    if (isCurrency) {
      localeOptions.style = 'currency'
      localeOptions.currency = 'USD'
    }
    data = data.toLocaleString('en-US', localeOptions)
  }

  return (
    <div className={classes.SimpleCardInfo} data-testid="root">
      {icon && (
        <div className={classes.iconArea} style={{color: iconColor}} data-testid="iconarea">
          <div className={classes.iconBackground}></div>
          {icon}
        </div>
      )}
      <div className={classes.dataArea}>
        <Typography data-testid="data">{data}</Typography>
        <Typography data-testid="text">{text}</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(SimpleCardInfo)
