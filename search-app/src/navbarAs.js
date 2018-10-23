import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


export class NavbarE extends React.Component {
    constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
}
toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

