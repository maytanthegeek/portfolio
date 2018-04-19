import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import { AppBar } from 'material-ui';
import Home from './components/Home/Home';
import { MuiThemeProvider } from 'material-ui/styles';
import muiTheme from './theme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My Home"></AppBar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/about" component={About}></Route> */}
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
