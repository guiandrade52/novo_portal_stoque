import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom component
import App from './App';

// Theme
import theme from './theme';
import './assets/css/global.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>, document.getElementById('root'),
);
