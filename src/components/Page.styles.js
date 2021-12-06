const styles = ({ palette, spacing, breakpoints }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: spacing(8),
    backgroundColor: palette.background.main,
    flexGrow: 1,
    overflowY: 'auto',

    [breakpoints.down('sm')]: {
      marginBottom: spacing(16),
    },
  },
})

export default styles
