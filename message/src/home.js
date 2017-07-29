import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';

injectTapEventPlugin();

class Home extends Component{
  render(){
    return (
      <MuiThemeProvider>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </MuiThemeProvider>
    )
  }
}

export default Home;
