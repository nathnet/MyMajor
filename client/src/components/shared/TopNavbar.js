import React, { Component } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class TopNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: this.props.bgColor,
            className: this.props.className,
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div 
                className={`position-relative z-10000 ${this.state.className}`}
                style={{ backgroundColor: `${this.state.bgColor}` }}>
                <Navbar dark className="container-fluid col-11 align-items-start" expand="md">
                    <NavbarBrand tag={RRNavLink} to="/">
                        <img src={require("../../assets/LogoWhite.png")} alt="Logo" className="logo logo-lg logo-xl" />
                    </NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar px-md-3 px-lg-4 px-xl-5" navbar>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink tag={RRNavLink} to="/major-quiz" activeClassName="active">Discover Your Major Quiz</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink tag={RRNavLink} to="/resources" activeClassName="active">Class Resources</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink tag={RRNavLink} to="/majors" activeClassName="active">Majors List</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink tag={RRNavLink} to="/faq" activeClassName="active">FAQ</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

TopNavbar.defaultProps = {
    bgColor: '#503C93'
};

export default TopNavbar;