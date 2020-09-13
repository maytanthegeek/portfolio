import {
  AppBar, IconButton, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import { BrightnessHigh, BrightnessLow } from '@material-ui/icons';
import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { darkTheme, lightTheme, useStyles } from './theme';
import Home from './components/Home/Home';

export default function App() {
  const [darkState, setDarkState] = useState(true);
  const classes = useStyles();

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Home
          </Typography>
          <IconButton onClick={handleThemeChange}>
            {darkState ? <BrightnessHigh /> : <BrightnessLow />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" component={About}></Route> */}
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}
