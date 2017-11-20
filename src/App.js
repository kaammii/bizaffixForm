import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Index from './components/app/index';
import AppTheme from './app-theme';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme} >
        <Index />
      </MuiThemeProvider>
    );
  }
}

export default App;
