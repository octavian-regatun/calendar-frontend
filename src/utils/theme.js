import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#000000'
    },
    secondary: {
      main: '#000000',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#000',
      secondary: '#ffffff'
    }
  }
});

const customTheme = {
  dark: {
    primary: {
      light: '#1e242d',
      dark: '#171d25'
    },
    title: '#ffffff',
    subtitle: '#bbbdc0'
  },
  orange: {
    primary: '#FF7F00',
    light: '#FFB043',
    dark: '#c67600'
  }
};

export { theme };
export default customTheme;
