import React from 'react';
// import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import { Button } from 'reactstrap';
import './index.css';

const DatePickerExampleSimple = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
  </div>
);


export class ButtonE extends React.Component {
  render() {
    return (
     <div>
        <MuiThemeProvider>
        <div>
        <div>
             <DatePickerExampleSimple />
        </div>
        <div>
          <Button color="danger">Danger!</Button>
       </div>
       </div>
       </MuiThemeProvider>
    </div>
    );
  }
}

export default DatePickerExampleSimple;