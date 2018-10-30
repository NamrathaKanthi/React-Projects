import React, { Component } from 'react';
import './customText.scss';

import Input from '@material-ui/core/Input';

export class TextFieldExampleSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            id: this.props.id,
            type: this.props.type
        }
    }
    render() {
        return (
            <div>
                <Input placeholder={this.props.name} id={this.props.id} type={this.props.type} />
                <br />
            </div>
        )
    }
};