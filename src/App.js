import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Top from './components/Top/Top.js';
import Nav from './components/Nav/Nav.js';
import About from './components/About/About.js';

class App extends Component {
  render() {
    return (
      <div>
         <Nav />
         <Top />
         <About />
      </div>
    )
  }
}

export default App;
