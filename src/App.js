import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import './index.css';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">
            <Link to="/">AbracaMaths</Link>
          </h1>
          <nav className="App-navigation">
            <Link to="/">Home</Link>
            <Link to="/calculator">Calculator</Link>
            <Link to="/quote">Quotes</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
