import React, { Component } from 'react';
import { connect } from 'react-redux';
import './personal.scss';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


export const TextFieldExampleSimple = (props) => (
    <div>
        <Input
            placeholder={props.name}
            id={props.id}
            type={props.type}
        />
        <br />
    </div>
);

export class Personal extends Component {
    constructor(props) {
        super(props);
        this.saveFn = this.saveFn.bind(this);
    }
    saveFn(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
        if (event.target.firstName !== '' && event.target.lastName !== '' && event.target.age !== '' && event.target.gender !== '') {
            console.log(event.target);
            alert("thanks!!");
        }
        else {
            alert("please fill the fields");
        }
    }

    render() {
        return (
            <form onSubmit={this.saveFn}>
                <TextFieldExampleSimple name='First Name' id='firstname' type='text' />
                <TextFieldExampleSimple name='Last Name' id='lastname' type='text' />
                <TextFieldExampleSimple name='Gender' id='gender' type='text' />
                <TextFieldExampleSimple name='Age' id='age' type='number' />

                <Button type='submit' variant="contained" color="primary" style={{ marginTop: 10 }}  > <SaveIcon />Save</Button>
            </form>
        );
    }
}

const mapStore = ((store) => { return { "data": store.UserDetails } });
export default connect(mapStore)(Personal);