const styles = ({ palette, spacing, shadows, breakpoints }) => ({
  InfoCard: {
    overflowX: 'hidden',
    backgroundColor: palette.background.paper,
    borderRadius: '8px',
    boxShadow: shadows[2],
    border: '1px solid',
    borderColor: palette.divider,
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

    transform: 'scale(1)',
    transition: '0.5s ease all',
    '&:hover': {
      transform: 'scale(1.05)',
      zIndex: 10,
      borderColor: palette.primary.dark,
    },
  },
})

export default styles
