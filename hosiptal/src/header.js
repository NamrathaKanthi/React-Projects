import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faAmbulance, faSearch, faChild, faShareAlt, faMapMarkerAlt, faPlaneDeparture, faCreditCard, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import rainbowlogo from './assets/logo.png';
import { ButtonsInstance } from "./dropdown";

library.add(faHeadset, faAmbulance, faSearch, faChild, faShareAlt, faMapMarkerAlt, faPlaneDeparture, faCreditCard, faGripHorizontal);

const styling = {
    no_caret_button: {
        background: 'none',
        border: 'none',
        color: 'white',
        padding: '0px'
    }
};

export const IconButtonExampleSimple = () => (
    <ButtonToolbar>
        <DropdownButton bsStyle="default" title='virtual tour' noCaret id="dropdown-no-caret" style={styling.no_caret_button}>
            <MenuItem eventKey="1">Hyderabad</MenuItem>
            <MenuItem eventKey="2">Chennai</MenuItem>
            <MenuItem eventKey="3">Vijaywada</MenuItem>
        </DropdownButton>
    </ButtonToolbar>
);

export class Header extends Component {
    constructor(prop) {
        super(prop);
        this.state = { isClicked: false };
    }
    render() {
        var dropDownClickFn = () => {
            this.setState({ isClicked: !this.state.isClicked });
        };
        return (
            <div className='row header'>
                <div className='col-md-6 rainbow-img'>
                    <div className='col-md-7'>
                        {/* <img src={rainbowlogo} alt='rainbow' /> */}
                    </div>
                    <div className='col-md-4'>
                        <span>
                            <FontAwesomeIcon icon="headset" />
                        </span>
                    </div>
                </div>

                <div className='col-md-6'>
                    <ul className='tonnavwrp'>
                        <li>
                            <FontAwesomeIcon icon="ambulance" className='ambulance-icon' />
                        </li>
                        <li>
                            <IconButtonExampleSimple className='p-t-0' />
                        </li>
                        <li className='mhide'>
                            <div className='navgroup'>
                                <ul className='iconnavtop'>
                                    <li>
                                        <FontAwesomeIcon icon="search" />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon="child" />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon="share-alt" onClick={dropDownClickFn} />
                                        {this.state.isClicked ? <ButtonsInstance className='list-unstyled' /> : ''}
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon="map-marker-alt" />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon="plane-departure" />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon="credit-card" />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon="grip-horizontal" style={{ height: 15, width: 15, color: 'white' }} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
