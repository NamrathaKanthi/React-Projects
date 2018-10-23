import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Router, { Route } from "react-browser-router";
import { Link } from "react-router-dom";
import {Registration} from './registration.js';
import {Company} from './composition.js';


export const Logged = (props) => (
  <div>
     <Router>
            <div>
                <Link to="/"><FlatButton label="Registration" secondary={true} /></Link>
                <Link to="/company"><FlatButton label="Company" secondary={true} /></Link>
            </div>
        </Router>
  </div>

);


class AppBarExampleComposition extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
        <AppBar
          title="Title"
          iconElementRight={<Logged />}
        />
        <Router>
            <div>
                {/*<Link to="/">Registration</Link>
                <Link to="/composition">Composition</Link>*/}
 
                <Route exact path="/" component={Registration} />
                <Route exact path="/company" component={Company} />
            </div>
        </Router>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AppBarExampleComposition;