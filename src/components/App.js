import React, { Component } from 'react';
import Header from './Header';
import Input from '../containers/Input';
import Display from '../containers/Display';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Input />
        <Display />
      </div>
    );
  }
}

export default App;
