import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error('Could not find root element');
}
