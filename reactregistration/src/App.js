import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { AppBarDiv } from "./appBar.js";


class App extends Component {
  render() {
    return (
      <div>
        <AppBarDiv />
      </div>
    );
  }
}

export default connect()(App);
