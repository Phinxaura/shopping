import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688', 
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFB74D', 
      contrastText: '#ffffff',
    },
    success: {
      main: '#66BB6A', 
      contrastText: '#ffffff',
    },
    error: {
      main: '#EF5350',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFA726', 
    },
    background: {
      default: '#fefefe',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial, sans-serif',
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
