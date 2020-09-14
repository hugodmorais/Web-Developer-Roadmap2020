import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Welcome to React</div>
      </header>
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
