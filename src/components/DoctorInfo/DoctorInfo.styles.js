const styles = ({ spacing }) => ({
  root: {
    padding: spacing(3),
  },
  info: {
    display: 'flex',
    marginLeft: spacing(4),
  },
  avatar: {
    marginRight: spacing(4),
    width: '6rem',
    height: '6rem',
  },
  bio: {
    marginTop: spacing(4),
    textAlign: 'justify',
    textIndent: '4ch',
  },
})

export default styles
