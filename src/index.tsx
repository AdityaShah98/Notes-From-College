import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/professors" />} />
      <Route path="/professors" element={<App />} />
      <Route path="/professors/:professorId" element={<App />} />
      <Route path="/about" element={<App />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {router}
  </ThemeProvider>,
  document.querySelector('#root'),
);
