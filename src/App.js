import React, { Component } from 'react';
import NavBar from './components/NavBar'
import ServiceQueue from './components/ServiceQueue';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ServiceQueue />
      </div>
    );
  }
}

export default App;
