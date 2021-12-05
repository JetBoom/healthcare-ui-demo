const styles = ({ palette, spacing }) => ({
  root: {
    minHeight: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.background.menu,
    paddingLeft: spacing(12),
    paddingRight: spacing(12),
    borderBottom: '1px solid',
    borderBottomColor: palette.divider,
  },
  logo: {
    verticalAlign: 'middle',
  },
})

export default styles
