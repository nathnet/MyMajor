import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
import Banner from './Banner';

class NavWithBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alpha: this.props.alpha,
            bgColor: this.props.bgColor,
            bgImg: this.props.bgImg,
        };
    }

    hexToRGB(hex, alpha) {
        if (hex) {
            const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        
            if (alpha) {
                return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
            } else {
                return "rgb(" + r + ", " + g + ", " + b + ")";
            }
        } else {
            return "transparent";
        }
    }

    render() {

        return (
            <div 
                className="vh-75 mb-5 bg-no-repeat bg-center position-relative" 
                style={{ backgroundImage: `url(${this.state.bgImg})` }}>
                <div 
                    className="vh-75 mb-5" 
                    style={{ backgroundColor: `${this.hexToRGB(this.state.bgColor, this.state.alpha)}` }}>
                    <TopNavbar bgColor="bg-transparent" />
                    <Banner className="position-absolute bottom" />
                </div>
            </div>
        );
    }
}

NavWithBanner.defaultProps = {
    alpha: '0.75',
    bgColor: '#503C93'
}

export default NavWithBanner;