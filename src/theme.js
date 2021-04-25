import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ff5000',
      light: '#ff5000',
      dark: '#ff6500',
    },
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#ff934d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#efefef59',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;