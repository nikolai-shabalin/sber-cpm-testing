import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const rootElement = document.getElementById('root');
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  throw new Error('Could not find root element');
}
