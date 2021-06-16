import { createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#67159C',
    },
    secondary: {
      main: '#07D962',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1E1E26',
    },
    text: {
      primary: '#f5f5f5',
    },
  },
})

export default theme
