import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Index from './components/app/index';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Index />
      </MuiThemeProvider>
    );
  }
}

export default App;
