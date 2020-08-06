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
            <div className={`${this.state.bgColor} ${this.state.className}`}>
                <Navbar dark className="container-fluid col-11" expand="md">
                    <NavbarBrand href="/" className="col col-lg-4 col-xl-5">MyMajor</NavbarBrand>
                    <NavbarToggler onClick={() => this.toggle()} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto navbar container" navbar justified>
                            <NavItem>
                                <NavLink>Discover Your Major Quiz</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Class Resources</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Majors List</NavLink>
                            </NavItem>
                            <NavItem>
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