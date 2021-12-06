import { useNavigate, useLocation } from 'react-router-dom'
import { RouteList } from 'routes'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import HelpIcon from '@material-ui/icons/Help'
import AddIcon from '@material-ui/icons/Add'
import NavigationButton from './NavigationButton'
import styles from './NavigationMenu.styles'


NavigationMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

function NavigationMenu({ classes }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className={classes.root}>
      <Button className={classes.registerPatientButton} endIcon={<AddIcon />}>
        Register Patient
      </Button>

      <nav className={classes.routes}>
        {RouteList
          .filter((route) => route.mainNavName)
          .map((route, routeIdx) => (
            <NavigationButton
              key={routeIdx}
              data-active={location.pathname === route.path ? 1 : 0}
              startIcon={route.icon ? <route.icon /> : <HelpIcon />}
              variant="text"
              onClick={() => navigate(route.path)}
            >
              {route.mainNavName}
            </NavigationButton>
          )
        )}
      </nav>

      <div className={classes.mobileAd}>
        <a href="https://www.google.com/search?q=awesome+healthcare+mobile+app" rel="noreferrer" target="_blank">
          <img src="/getmobileapp.png" alt="Get mobile app" />
        </a>
      </div>
    </div>
  )
}

export default withStyles(styles)(NavigationMenu)
