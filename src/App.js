import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Header from './components/Header'
import Players from './containers/Players'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Players />
      </div>
    );
  }
}

export default App;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

  body {
    font-family: Roboto, sans-serif;
    background: #f7faff;
  }
`

