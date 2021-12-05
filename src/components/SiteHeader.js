import { useNavigate } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './SiteHeader.styles'


SiteHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

function SiteHeader({ classes }) {
  const navigate = useNavigate()

  const onClickLogo = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <header className={classes.root}>
      <a href="/" onClick={onClickLogo}>
        <img src="/hcarelogo.png" alt="Logo" />
      </a>
      <Typography>[Current User]</Typography>
    </header>
  )
}


export default withStyles(styles)(SiteHeader)
