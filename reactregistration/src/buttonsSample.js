import React, { Component } from 'react';
import './buttonsSample.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

export const FlatButtonExampleSimple = () => (
    <div>
        <FlatButton label="Submit" secondary={true} />
        <FlatButton label="Clear" secondary={true} />
        <FlatButton label="Reset" secondary={true} />
    </div>
);