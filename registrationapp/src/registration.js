import React, { Component } from 'react';
import './registration.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Router, { Route } from "react-browser-router";
import Notifications, {notify} from 'react-notify-toast';
import {Company} from './composition.js';


const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  div_class : {
     marginLeft: 150,
  }
};

export const IconButtonExampleSimple = () => (
  <div>
    <IconButton class="material-icons" label="Submit">donut_large</IconButton>
  </div>
);


export const AvatarExampleSimple = () => (
    <List>
       <ListItem
            disabled={true}
            leftAvatar={<Avatar>F</Avatar>}
            >
            Form Registration
        </ListItem>
    </List>
);

/*export const TextFieldExampleSimple = (props) => (
    <div>
        <TextField
        hintText="User Name"
        floatingLabelText="Username"
        ref="username"
        defaultValue = "Namratha"
        ref={props.inputRef}
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
      </div>
);*/

export const ToggleExampleSimple = (props) => (
  <div>
      
      </div>
);

export const FlatButtonExampleSimple = (props) => (
  <div>
    <FlatButton label="Submit" secondary={true} onClick={this.props.handleAcceptActiveClick} inputRef={el => this.inputElement = el} />
    <FlatButton label="Clear" secondary={true} />
    <FlatButton label="Reset" secondary={true} />
  </div>
);


export class Registration extends Component {
  constructor(props) {
    super(props);
    this.handleAcceptActiveClick = this.handleAcceptActiveClick.bind(this);
    this.state = {isClicked: false};
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
  click(){
    if(this.refs.username.getValue() != ""){
      if(this.refs.email.getValue() != ""){
        if(this.refs.pass.getValue() != ""){
          console.log(this.refs.username.getValue());
          console.log(this.refs.email.getValue());
          console.log(this.refs.pass.getValue());
          window.location = '/company';
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
                <AvatarExampleSimple/>
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
