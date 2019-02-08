import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import SubNav from './components/SubNav'
import Slider from './components/Slider'
import Articles from './components/Articles'
import SideContent from './components/SideContent'
import Footer from './components/Footer'

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

      <div className="container">
        <div className="row mt-5">
          <Articles />
          <SideContent />
        </div>
      </div>

      <Footer />
      
      </React.Fragment>
    );
  }
}

export default App;
