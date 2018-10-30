import React, { Component } from 'react';
import './education.scss';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import Toggle from 'material-ui/Toggle';
// import Notifications, { notify } from 'react-notify-toast';
// import { FlatButtonExampleSimple } from "./buttonsSample.js";
// import { AvatarExampleSimple } from "./avatar.js";
//import TextField from '@material-ui/core/TextField';

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


// export const TextFieldExampleSimple = () => (
//   <div>
//     <span><TextField
//       hintText="schooling"
//       floatingLabelText="schooling"
//     /></span>
//     <span>
//       <form noValidate>
//         <TextField
//           id="date"
//           label="Birthday"
//           type="date"
//           defaultValue="2017-05-24"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </form>
//     </span><br />
//     <TextField
//       hintText="+2 College/school"
//       floatingLabelText="+2 College/school"
//     /><br />
//     <TextField
//       hintText="Graduation"
//       floatingLabelText="Graduation"
//     /><br />
//   </div>
// );

// export const ToggleExampleSimple = () => (
//   <div style={styles.block}>
//     <Toggle
//       label="Accept terms"
//       defaultToggled={true}
//       style={styles.toggle}
//     />
//   </div>
// );


export class Education extends Component {

  render() {

    return (
      <div style={styles.div_class}>
        {/* <MuiThemeProvider>
          <div>
            <div>
              <AvatarExampleSimple />
            </div>
            <div>
              <TextFieldExampleSimple />
            </div>
            <div>
              <ToggleExampleSimple />
            </div>
            <div>
              <FlatButtonExampleSimple />
            </div>
            <div>
              <Notifications />
            </div>
          </div>
        </MuiThemeProvider> */}
        Education
      </div>
    );
  }
}
