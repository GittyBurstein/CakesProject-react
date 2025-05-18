// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#f7b2ad', // ורוד אפרסקי
    },
    secondary: {
      main: '#fcd5ce', // אפרסק בהיר
    },
  },
});

export default theme;
