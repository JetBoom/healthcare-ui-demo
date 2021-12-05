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
    boxShadow: '0px 0px 8px #0001 inset',
  },
  logo: {
    verticalAlign: 'middle',
  },
  profileArea: {
    display: 'flex',
    alignItems: 'center',

    '& > *:not(:last-child)': {
      marginRight: spacing(4),
    },
  },
  profilePicture: {
  },
  profileName: {
    fontWeight: 'bold',
  },
})

export default styles
