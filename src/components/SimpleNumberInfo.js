import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './SimpleNumberInfo.styles'


SimpleNumberInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.any.isRequired,
  isCurrency: PropTypes.bool,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
}

function SimpleNumberInfo({ classes, data, isCurrency, text, icon, iconColor }) {
  if (typeof data === 'number') {
    const localeOptions = {}
    if (isCurrency) {
      localeOptions.style = 'currency'
      localeOptions.currency = 'USD'
    }
    data = data.toLocaleString('en-US', localeOptions)
  }

  return (
    <div className={classes.SimpleNumberInfo}>
      {icon && (
        <div className={classes.iconArea} style={{color: iconColor || 'black'}}>
          <div className={classes.iconBackground}></div>
          {icon}
        </div>
      )}
      <div className={classes.dataArea}>
        <Typography>{data}</Typography>
        <Typography>{text}</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(SimpleNumberInfo)
