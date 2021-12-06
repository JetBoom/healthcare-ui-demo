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
      height: '4rem',
      position: 'fixed',
      flexDirection: 'row',
      justifyContent: 'center',
      bottom: 0,
      zIndex: 100,
      borderRightWidth: 0,
      borderTop: '1px solid',
      borderTopColor: palette.divider,
      boxShadow: shadows[5],
    },
  },
  routes: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: spacing(5),

    [breakpoints.up('sm')]: {
      '& > *:not(:first-child)': { marginTop: spacing(6) },
    },

    [breakpoints.down('sm')]: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
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
