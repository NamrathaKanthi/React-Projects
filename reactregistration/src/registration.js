import React, { Component } from 'react';
import './registration.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import Router, { Route } from "react-browser-router";
import Notifications, { notify } from 'react-notify-toast';
import { FlatButtonExampleSimple } from "./buttonsSample.js";
import { AvatarExampleSimple } from "./avatar.js";


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  div_class: {
    marginLeft: 150,
  }
};


export class Registration extends Component {
  constructor(props) {
    super(props);
    this.handleAcceptActiveClick = this.handleAcceptActiveClick.bind(this);
    this.state = { isClicked: false };
  }

  toggleChange() {
    this.setState((prevState, props) => ({
      isClicked: !prevState.isClicked
    }));
  }

  handleAcceptActiveClick() {
    if (this.state.isClicked) {
      alert("accpeted");
      console.log("hello");
    }
    else {
      alert("please accept terms");
      FlatButtonExampleSimple.disabled = true;
      console.log("hi");
    }
  }
  click() {
    if (this.refs.username.getValue() != "") {
      if (this.refs.email.getValue() != "") {
        if (this.refs.pass.getValue() != "") {
          console.log(this.refs.username.getValue());
          console.log(this.refs.email.getValue());
          console.log(this.refs.pass.getValue());
          window.location = '/personal';
        }
      }
    }
    else {
      alert("please fill details");
      notify.show('Toasty!');
    }
  }

  render() {
    return (
      <div style={styles.div_class}>
        <MuiThemeProvider>
          <div>
            <div>
              <AvatarExampleSimple />
            </div>
            <div>
              <TextField
                hintText="User Name"
                floatingLabelText="Username"
                ref="username"
              /><br />
              <TextField
                hintText="Email"
                floatingLabelText="Email"
                ref="email"
              /><br />
              <TextField
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
                ref="pass"
              /><br />
              <br />
            </div>
            <div style={styles.block}>
              <Toggle
                label="Accept terms"
                defaultToggled={this.state.isClicked}
                style={styles.toggle}
                onToggle={this.toggleChange.bind(this)}
              />
            </div>
            <div>
              <FlatButton label="Submit" secondary={true} onClick={this.click.bind(this)} />
            </div>
            <div>
              <Notifications />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
