const styles = ({ spacing, breakpoints }) => ({
  InfoCardGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridAutoRows: 'max-content',
    gridAutoColumns: 'max-content',
    //gridTemplateRows: '1fr 1fr 1fr',
    gap: spacing(5),
    gridGap: spacing(5),

    [breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
})

export default styles
