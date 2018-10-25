import React, { Component } from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';

export class ButtonsInstance extends Component {

    render() {
        return (
            <Dropdown bsRole='menu' id="dropdown-no-caret" className='dropdown-menu'>
                <ul className='list-unstyled'>
                    <MenuItem eventKey="1">FaceBook</MenuItem>
                    <MenuItem eventKey="2">Twitter</MenuItem>
                    <MenuItem eventKey="3" active>Instagram</MenuItem>
                </ul>
            </Dropdown>
        )
    }

};
