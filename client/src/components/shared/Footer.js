import React, { Component } from 'react';
import { NavItem, NavLink, Navbar, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer className="bg-primary-color footer mt-auto py-5 clearfix">
                <div className="container-fluid col-10">
                    <div className="text-white pb-3 mx-auto text-center text-sm-left">
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="/major-quiz">Major Quiz</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="/resources">Class Resources</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="">Contact</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="">Creators</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="">FAQ</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={Link} to="">Some other link</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                    <hr className="bg-white" />
                    <div className="text-center text-sm-left clearfix" style={{}}>
                        <div className="d-sm-inline-block float-sm-right">
                            <div className="text-center text-sm-right">
                                <a href="https://www.twitter.com">
                                    <SvgIcon component={Twitter} fontSize="large" className="mx-2 icon" />
                                </a>
                                <a href="https://www.instagram.com">
                                    <SvgIcon component={Instagram} fontSize="large" className="mx-2 icon" />
                                </a>
                                <a href="https://www.facebook.com">
                                    <SvgIcon component={Facebook} fontSize="large" className="mx-2 icon" />
                                </a>
                            </div>
                            <div className="text-center text-sm-left">
                                <Navbar className="p-0" dark expand>
                                    <Nav className="navbar mx-auto pr-0 d-block d-sm-flex" navbar>
                                        <NavItem className="ml-sm-3">
                                            <NavLink tag={Link} to="">Contact Us</NavLink>
                                        </NavItem>
                                        <NavItem className="ml-sm-3">
                                            <NavLink tag={Link} to="">Privacy Policy</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Navbar>
                            </div>
                        </div>
                        <Link to="/">
                            <div className="d-sm-inline-block p-2 border border-2 rounded">
                                <h1 style={{color: '#FFFFFF'}}>LOGO</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;