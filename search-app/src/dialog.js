import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const dialogbox={
    width:500,
    height : 200,
  }
var number = [];
export class DialogExampleSimple extends React.Component {
  //const numbers = [1, 2, 3, 4, 5];
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
          <MuiThemeProvider>
              <div>
        <div>
        <RaisedButton label="Dialog" onClick={this.handleOpen} />
        </div>
        <div>
        <Dialog
          title="Alphabet"
          actions={actions}
          modal={false}
          open={this.state.open}
          onClick={this.handleClose}
          style={dialogbox}
        >
         <div onClick={this.handleClose} style={{color:'red',cursor : 'pointer'}}> A B C D E F G H I J K L M</div>
          <div onClick={this.handleClose} style={{color:'red',cursor : 'pointer',marginTop : '20'}}>  N O P Q R S T U V W X Y Z</div>
        </Dialog>
        </div>
    </div>
        </MuiThemeProvider>
      </div>
    );
  }
}