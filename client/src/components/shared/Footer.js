import React, { Component } from 'react';
import { NavItem, NavLink, Navbar, Nav } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { SvgIcon } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer className="bg-theme footer py-5 clearfix">
                <div className="container-fluid col-10">
                    <div className="text-white pb-3 mx-auto text-center text-sm-left">
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/major-quiz">Major Quiz</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/resources">Class Resources</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/contact" disabled>Contact</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/creators" disabled>Creators</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <Navbar dark className="d-inline-block py-0 px-lg-5 col col-sm-4 col-xl-3">
                            <Nav navbar className="d-block">
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/faq">FAQ</NavLink>
                                </NavItem>
                                <NavItem className="py-sm-2">
                                    <NavLink tag={RRNavLink} to="/links" disabled>Some other link</NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </div>
                    <hr className="bg-white" />
                    <div className="text-center text-sm-left clearfix" style={{}}>
                        <div className="d-sm-inline-block float-sm-right">
                            <div className="text-center text-sm-right">
                                <a href="https://twitter.com/MyMajorHT1">
                                    <span className="text-hide">Twitter</span>
                                    <SvgIcon component={Twitter} fontSize="large" className="mx-2 icon text-white" />
                                </a>
                                <a href="https://www.linkedin.com/company/mymajorht">
                                    <span className="text-hide">LinkedIn</span>
                                    <SvgIcon component={LinkedIn} fontSize="large" className="mx-2 icon text-white" />
                                </a>
                                <a href="https://www.instagram.com/mymajorht">
                                    <span className="text-hide">Instagram</span>
                                    <SvgIcon component={Instagram} fontSize="large" className="mx-2 icon text-white" />
                                </a>
                                <a href="https://www.facebook.com/MyMajor-109627254200104">
                                    <span className="text-hide">Facebook</span>
                                    <SvgIcon component={Facebook} fontSize="large" className="mx-2 icon text-white" />
                                </a>
                            </div>
                            <div className="text-center text-sm-left">
                                <Navbar className="p-0" dark expand>
                                    <Nav className="navbar mx-auto pr-0 d-block d-sm-flex" navbar>
                                        <NavItem className="ml-sm-3">
                                            <NavLink tag={RRNavLink} to="/contact" disabled>Contact Us</NavLink>
                                        </NavItem>
                                        <NavItem className="ml-sm-3">
                                            <NavLink tag={RRNavLink} to="/privacy-policy" disabled>Privacy Policy</NavLink>
                                        </NavItem>
                                    </Nav>
                                </Navbar>
                            </div>
                        </div>
                        <RRNavLink to="/">
                            <img 
                                src={require("../../assets/LogoWhite.png")}
                                alt="Logo" className="logo-footer" />
                        </RRNavLink>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;