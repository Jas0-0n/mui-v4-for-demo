import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3498DB',
      dark: '#2980B9',
      light: '#5DADE2',
    },
    sidebar: {
      main: '#2C3E50',
      hover: '#2980B9',
      active: '#3498DB',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#999999',
    },
    success: {
      main: '#2ECC71',
    },
    error: {
      main: '#E74C3C',
      dark: '#C0392B',
    },
    divider: '#EAEAEA',
  },
  typography: {
    fontFamily: '"PingFang SC", "Microsoft YaHei", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 13,
    button: {
      fontSize: 12,
      textTransform: 'none',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);