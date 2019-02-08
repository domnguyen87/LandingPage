import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import SubNav from './components/SubNav'
import Slider from './components/Slider'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="page-loader">
        <div className="bg-primary"></div>
      </div>
      <Navigation />
      <SubNav />
      <Slider />

      .
      
      </React.Fragment>
    );
  }
}

export default App;
