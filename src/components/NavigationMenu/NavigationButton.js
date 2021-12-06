import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'


const styles = ({ palette, spacing, breakpoints }) => ({
  root: {
    fontSize: '120%',
    backgroundColor: 'transparent!important',
    opacity: 0.5,
    transition: '0.5s ease opacity',

    '&:hover': {
      opacity: 1,
      //textShadow: '0px 0px 2px white',
    },

    '&[data-active="1"]': {
      opacity: 1,

      '& .MuiSvgIcon-root': {
        color: palette.primary.main,
      },
    },

    '& .MuiSvgIcon-root': {
      fontSize: '150%',
      transition: '0.5s ease color',
    },
  },
  startIcon: {
    marginRight: spacing(6),

    [breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  label: {
    color: palette.text.primary,
    transition: '0.25s ease color',
    fontWeight: 'bold',

    [breakpoints.down('sm')]: {
      fontSize: 0,
    },
  },
  /*text,
  textPrimary,
  textSecondary,
  outlined,
  outlinedPrimary,
  outlinedSecondary,
  contained,
  containedPrimary,
  containedSecondary,
  disableElevation,
  focusVisible,
  disabled,
  colorInherit,
  textSizeSmall,
  textSizeLarge,
  outlinedSizeSmall,
  outlinedSizeLarge,
  containedSizeSmall,
  containedSizeLarge,
  sizeSmall,
  sizeLarge,
  fullWidth,
  startIcon,
  endIcon,
  iconSizeSmall,
  iconSizeMedium,
  iconSizeLarge*/
})

export default withStyles(styles)(Button)
