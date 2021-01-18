import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles/';
import './App.css';
import React, { Component } from 'react';
import store from './store/store';
import {initiateImage } from './Action/image';
import {actfetchVideo} from './Action/video';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import VIdeoResponsive from './Components/Video';

class App  extends Component{

  componentDidMount(){
    store.dispatch(initiateImage());
    store.dispatch(actfetchVideo());
  }
  render() {
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Search />
        <VIdeoResponsive />
      </MuiThemeProvider>
    );
  }
  
}

export default App;
