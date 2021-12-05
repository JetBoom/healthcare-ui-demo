import { useNavigate } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Typography, Avatar } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
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
        <img src="/hcarelogo.png" alt="Logo" className={classes.logo} />
      </a>
      <div className={classes.profileArea}>
        <NotificationsIcon />
        <Avatar alt="" src="/testcontent/pfp7.jpg" className={classes.profilePicture} />
        <Typography className={classes.profileName}>John Smith</Typography>
      </div>
    </header>
  )
}


export default withStyles(styles)(SiteHeader)
