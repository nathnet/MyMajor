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
                className={`${this.state.className}`}
                style={{ backgroundColor: `${this.state.bgColor}` }}>
                <Navbar dark className="container-fluid col-11" expand="md">
                    <NavbarBrand href="/" className="">MyMajor</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar px-md-3 px-lg-4 px-xl-5" navbar>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink>Discover Your Major Quiz</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink>Class Resources</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink>Majors List</NavLink>
                            </NavItem>
                            <NavItem className="px-md-2 px-lg-3 px-xl-4">
                                <NavLink>FAQ</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

TopNavbar.defaultProps = {
    bgColor: 'primary-color'
};

export default TopNavbar;