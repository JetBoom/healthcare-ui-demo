const styles = ({ palette, spacing, shadows, breakpoints }) => ({
  InfoCard: {
    overflowX: 'hidden',
    backgroundColor: palette.background.paper,
    borderRadius: '8px',
    boxShadow: shadows[1],
    padding: `${spacing(6)} ${spacing(2)}`,

    '&[data-size="xl"]': { gridColumn: 'auto / span 4' },
    '&[data-size="lg"]': { gridColumn: 'auto / span 3' },
    '&[data-size="md"]': { gridColumn: 'auto / span 2' },
    '&[data-size="sm"]': { gridColumn: 'auto / span 1' },

    [breakpoints.down('md')]: {
      '&[data-size="xl"]': { gridColumn: 'auto / span 2' },
      '&[data-size="lg"]': { gridColumn: 'auto / span 2' },
      '&[data-size="md"]': { gridColumn: 'auto / span 2' },
      '&[data-size="sm"]': { gridColumn: 'auto / span 1' },
    },
    [breakpoints.down('sm')]: {
      gridColumn: 'auto / span 1!important',
    },
  },
})

export default styles
