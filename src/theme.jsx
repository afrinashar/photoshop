import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark', depending on your preference
    primary: {
      main: '#1976d2', // Primary color
      light: '#4791db',
      dark: '#115293',
      contrastText: '#ffffff', // Text color for primary buttons
    },
    secondary: {
      main: '#dc004e', // Secondary color
      light: '#e33371',
      dark: '#9a0036',
      contrastText: '#ffffff', // Text color for secondary buttons
    },
    error: {
      main: '#f44336', // Error color
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800', // Warning color
      light: '#ffb74d',
      dark: '#f57c00',
      contrastText: '#000000',
    },
    info: {
      main: '#2196f3', // Info color
      light: '#64b5f6',
      dark: '#1976d2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50', // Success color
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Background color
      paper: '#ffffff', // Paper color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#ffffff', // Secondary text color
      disabled: '#9e9e9e', // Disabled text color
      hint: '#9e9e9e', // Hint text color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Font family
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    button: {
      textTransform: 'none', // Disable uppercase transformation for buttons
    },
  },
});

export default theme;
