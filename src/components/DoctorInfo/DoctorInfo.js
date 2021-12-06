import { Typography, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import styles from './DoctorInfo.styles'


DoctorInfo.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }),
  classes: PropTypes.object.isRequired,
}

function DoctorInfo({ classes, doctor }) {
  return (
    <div className={classes.root} data-testid="doctorinfo">
      <div className={classes.info}>
        <Avatar src={doctor.avatarUrl} className={classes.avatar} data-testid="avatar" />
        <div>
          <Typography variant="h5" className={classes.nameInfo} data-testid="nametitle">
            {doctor.name}, {doctor.title}
          </Typography>
          <Typography className={classes.subInfo} data-testid="department">
            {doctor.department}
          </Typography>
        </div>
      </div>
      <Typography variant="body1" className={classes.bio} data-testid="bio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
    </div>
  )
}


export default withStyles(styles)(DoctorInfo)
