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
import Notifications, {notify} from 'react-notify-toast';


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
            Form Company
        </ListItem>
    </List>
);

export const TextFieldExampleSimple = () => (
    <div>
        <TextField
        hintText="User Name"
        floatingLabelText="Company name"  
        /><br />
        <TextField
        hintText="Email"
        floatingLabelText="Revenue"
        /><br />
        <TextField
        hintText="Founded-Date Picker"
      floatingLabelText="Founded-Date Picker"
        /><br />
      </div>
);

export const ToggleExampleSimple = () => (
  <div style={styles.block}>
      <Toggle
      label="Accept terms"
      defaultToggled={true}
      style={styles.toggle}
    />
      </div>
);

export const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Submit" secondary={true} />
    <FlatButton label="Clear" secondary={true} />
    <FlatButton label="Reset" secondary={true} />
  </div>
);


export class Company extends Component {

  render() {
      
    return (
      <div style={styles.div_class}>
        <MuiThemeProvider>
          <div>
            <div>
                <AvatarExampleSimple/>
            </div>
            <div>
                <TextFieldExampleSimple/>
            </div>
            <div>
                <ToggleExampleSimple/>
            </div>
             <div>
                <FlatButtonExampleSimple/>
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
