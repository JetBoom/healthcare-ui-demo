const styles = ({ palette, spacing }) => ({
  InfoCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing(4),
    paddingTop: 0,
    paddingBottom: spacing(4),
    marginLeft: spacing(-2),
    marginRight: spacing(-2),
    marginBottom: spacing(2),
    borderBottom: '1px solid',
    borderBottomColor: palette.divider,
  },
})

export default styles
