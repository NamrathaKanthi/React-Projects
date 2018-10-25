import React, { Component } from 'react';
import { Header } from "./header";
import { NavbarList } from "./navbar";

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='container-fluid image-div'>
        <div className='row'>
          <NavbarList />
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
