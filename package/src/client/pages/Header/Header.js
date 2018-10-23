import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomeDropdown, { DropdownTrigger, DropdownContent } from '../../components/customeDropdown/customeDropdown';
import './Header.scss';


class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className='header-part'>
                {this.props.data.fullName && <CustomeDropdown className="userInfo">
                    <DropdownTrigger className="cursorPointer">{this.props.data.fullName} <i className="fa fa-caret-down" aria-hidden="true"></i></DropdownTrigger>
                    <DropdownContent>
                        <ul className="dropdownList">
                            <li className="dropdownItem">
                                Log Out
                            </li>
                        </ul>
                    </DropdownContent>
                </CustomeDropdown>}
            </div>
        )
    }
}

const mapStore = ((store) => { return { "data": store.LogedInUserInfo } });
export default connect(mapStore)(Header);