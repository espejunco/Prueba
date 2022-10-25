import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './style.css'

const theme = createTheme({
  palette: {
    Gold: {
      main: '#FFD700',
    },
    Black: {
      main: '#000000',
    },
    White: {
      main: '#FFFFFF',
    },
    Blue: {
      main: '#0000FF',
    },
    Silver: {
      // This is green.A700 as hex.
      main: '#C0C0C0',
    },
    Red: {
      // This is green.A700 as hex.
      main: '#FF0000',
    },
    Pink: {
      // This is green.A700 as hex.
      main: '#FFC0CB',
    },
    BlackSilver: {
      // This is green.A700 as hex.
      main: '#666666',
    },
    MysticBlack: {
      // This is green.A700 as hex.
      main: '#000000',
    },
    TitaniumGrey: {
      // This is green.A700 as hex.
      main: '#545b62',
    },
    WineRed: {
      // This is green.A700 as hex.
      main: '#58181F',
    },
    FerrariEdition: {
      main:'##E33335',
    },
    Graphiteblack: {
      main:'#27292b',
    }
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}