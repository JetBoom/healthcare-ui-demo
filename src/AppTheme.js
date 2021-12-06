import {
  createTheme,
  ThemeProvider,
  //emphasize,
} from '@material-ui/core/styles'
import { deepPurple, green } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'


export const palette = {
  primary: {
    main: deepPurple[500],
  },
  secondary: {
    main: green[400],
  },
  background: {
    paper: '#fcfcfd',
    default: '#f5f6fa',
    menu: 'white', //emphasize('#f5f6fa', 0.02),
  },
}

export const typography = {
  fontFamily: 'Roboto, tahoma, sans-serif',
  /*default: {
    color: palette.secondary.main,
  },
  body2: {
    color: palette.secondary.main,
  },*/
}

export const mixins = {
  flexHorizontalList: (space) => {
    space = space ?? '0.5rem'
    return {
      display: 'flex',
      '& > *:not(:first-child)': {
        marginLeft: space,
      },
      '& > *:not(:last-child)': {
        marginRight: space,
      },
    }
  },
  flexVerticalList: (space) => {
    space = space ?? '0.5rem'
    return {
      display: 'flex',
      flexDirection: 'column',
      '& > *:not(:first-child)': {
        marginTop: space,
      },
      '& > *:not(:last-child)': {
        marginBottom: space,
      },
    }
  },
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  heightValues: {
    xs: 0,
    sm: 340,
    md: 540,
    lg: 720,
    xl: 970,
  },
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',
  get down() {
    return (key) => `@media (max-width:${(this.values[key] || key) - 0.5}px)`
  },
  get up() {
    return (key) => `@media (min-width:${(this.values[key] || key) + 0.5}px)`
  },
  get between() {
    return (keyA, keyB) =>
      `@media (min-width:${this.values[keyA] || keyA}px) and (max-width:${
        (this.values[keyB] || keyB) - 0.5
      }px)`
  },
  get downHeight() {
    return (key) => `@media (max-height:${(this.heightValues[key] || key) - 0.5}px)`
  },
  get upHeight() {
    return (key) => `@media (min-height:${(this.heightValues[key] || key) + 0.5}px)`
  },
  get betweenHeight() {
    return (keyA, keyB) =>
      `@media (min-height:${this.heightValues[keyA] || keyA}px) and (max-height:${
        (this.heightValues[keyB] || keyB) - 0.5
      }px)`
  },
}

export const overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
      fontWeight: 'bold',
      padding: '0.75em 1em',
    },
    label: {
      lineHeight: 1,
    },
    contained: {
      boxShadow: '0 0 transparent',
    },
    sizeSmall: {
      fontWeight: 'normal',
      padding: '0.75em 1em',
    },
  },
  MuiCssBaseline: {
    '@global': {
      html: {
        fontSize: 17,
        [breakpoints.down('lg')]: {
          fontSize: 15,
        },
        [breakpoints.down('md')]: {
          fontSize: 13,
        },
      },
      body: {
        fontFamily: typography.fontFamily,
        fontSize: '1rem',
        overflowX: 'hidden',
        width: '100vw',
      },
      button: {
        fontFamily: typography.fontFamily,
      },
      '*::-webkit-scrollbar': {
        width: 6,
      },
      '*::-webkit-scrollbar-track': {
        background: palette.primary.dark,
      },
      '*::-webkit-scrollbar-thumb': {
        background: palette.primary.main,
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: palette.primary.light,
      },
    },
  },
}

export const props = {
  MuiButton: {
    variant: 'contained',
    color: 'primary',
  },
}

export const spacing = (factor) => `${0.25 * factor}rem`

export const theme = createTheme({
  palette,
  overrides,
  typography,
  breakpoints,
  mixins,
  spacing,
  props,
})

export default function AppTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
