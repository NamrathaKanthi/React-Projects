import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import FlatButton from 'material-ui/FlatButton';
//import RaisedButton from 'material-ui/RaisedButton';
import 'bootstrap/dist/css/bootstrap.css';
//import Scrollspy from 'react-scrollspy'
import './index.css';
import Dialog from 'material-ui/Dialog';
//import { BrowserRouter, Route,Switch } from 'react-router';
import TextField from 'material-ui/TextField';
//import {ButtonE} from './buttonAs.js';
//import {NavbarE} from './navbarAs.js';
//import {Component} from './demos/componenT.js';
//import {Github} from './demos/githuB.js';
//import {DialogExampleSimple} from './dialog.js';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const dialogbox={
    width:700,
    height : 200,
  }
export class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
      id : 'text-box',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          //value={this.state.value}
          hintText="Search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

const styles={
  sidenav:{
    width:500,
    height: 200,
  },
  liststyle: {
    
  }
}


export default class Square extends React.Component {
  state = {
    open: false,
  };


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  

  render() {
    var intial = "";
    var names = ["Abharam Linclon","Abhilash","Abhi","Bharath","Bokka","Charminar","Charan","Daggupathi","Gnani","Namratha","Latha","Mani Deepika","Ravi","Ragha","Praneeth","Tri","Vamsi"];
   var sortednames = names.sort();
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for(var i=0;i<names.length;i++)
 console.log(names[i]);
 console.log(sortednames);
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <div style={styles.sidenav}>
                <List>
                  <Subheader>Recent chats</Subheader>
                  <TextFieldExampleControlled
                /><br />
                {sortednames.map((obj)=>
                  <ListItem
                    primaryText={obj}
                    leftIcon={<p onClick={this.handleOpen}>{obj.charAt(0)}</p>}
                  />)}
              </List>
              </div>
            <div>
              <Dialog
                title="Alphabet"
                modal={false}
                open={this.state.open}
                onClick={this.handleClose}
                style={dialogbox}
              >
              {alphabet.map((obj)=> <div onClick={this.handleClose} style={{color:'red',cursor : 'pointer'}}> {obj}</div>)} 
              </Dialog>
            </div>    
          </div>
        </MuiThemeProvider>
    </div>
    );
  }
}
  
ReactDOM.render(
    <div>
        <Square />
        {/*<ButtonE />
        <NavbarE />*/}
        {/*<DialogExampleSimple />*/}
        {/*<Component />
        <Github />,*/}
       {/*<BrowserRouter>
     <Switch>
    <Route path="/component" component={Component}>
    </Route>
    </Switch>
  </BrowserRouter>,*/}
     </div>,
 document.getElementById('root') );






