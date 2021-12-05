const styles = ({ palette, spacing }) => ({
  SimpleNumberInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataArea: {
    // Data
    '& > *:first-child': {
      color: palette.primary.dark,
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },

    // Description
    '& > *:last-child': {
      color: palette.text.secondary,
      whiteSpace: 'nowrap',
    },

    '&:not(:only-child)': {
      marginLeft: spacing(1),
    },
  },
  iconArea: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing(3),
    marginRight: spacing(3),
  },
  iconBackground: {
    backgroundColor: 'currentColor',
    borderRadius: '50%',
    opacity: 0.15,
    position: 'absolute',
    width: '175%',
    height: '175%',
  },
})

export default styles
