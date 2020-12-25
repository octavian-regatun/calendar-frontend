import DayjsUtils from '@date-io/dayjs';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import Routes from './components/Router';
import { theme } from './utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Routes />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
