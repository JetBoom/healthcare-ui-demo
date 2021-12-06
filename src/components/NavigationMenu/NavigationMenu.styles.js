const styles = ({ palette, spacing, breakpoints, shadows }) => ({
  root: {
    backgroundColor: palette.background.menu,
    padding: spacing(5),
    width: '15rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRight: '1px solid',
    borderRightColor: palette.divider,
    boxShadow: '0px 0px 8px #0001 inset',

    [breakpoints.down('sm')]: {
      width: '100%',
      position: 'absolute',
      zIndex: 100,
      borderRightWidth: 0,
      borderBottom: '1px solid',
      borderBottomColor: palette.divider,
      boxShadow: shadows[5],
    },
  },
  routes: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: spacing(5),

    '& > *:not(:first-child)': { marginTop: spacing(6) },

    [breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  registerPatientButton: {
    marginBottom: spacing(8),
  },
  mobileAd: {
    '& img': {
      maxWidth: '100%',
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
})

export default styles
