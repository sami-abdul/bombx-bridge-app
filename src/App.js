import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  Grid
} from '@material-ui/core';

import bnbridgeTheme from '../src/theme/theme';

// import Header from './components/header';
// import Instructions from './components/instructions';
import Controller from '../src/components/swap/swap';
// import Controller from '../src/components/controller/controller';

function App() {
  return (
      <MuiThemeProvider theme={ createMuiTheme(bnbridgeTheme) }>
        <CssBaseline />
        <Grid
            style={{ padding: '7.5rem 0'}}
            container
            justify="center"
            alignItems="center"
            direction="row">
          {
            // <Grid item align='right'>
            //   <Instructions />
            // </Grid>
          }
          <Grid item align="left">
            <Controller />
          </Grid>
        </Grid>
      </MuiThemeProvider>
  );
}

export default App;
