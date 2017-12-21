import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <div className="App-intro">
      <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
      </div>
    )
  }
}
export default App;
