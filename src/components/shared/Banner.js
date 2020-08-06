import React from 'react';
import { Jumbotron } from 'reactstrap';

const Banner = (props) => {

    const {
        alpha,
        bgColor,
        bgImg,
        className,
    } = props;

    function hexToRGB(hex, alpha) {
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

    return (
        <div className="" style={{}}>
            <Jumbotron 
                className={`w-100 bg-no-repeat bg-center position-relative ${className}`}
                style={{ backgroundImage: `url(${bgImg})`,  backgroundColor: `${hexToRGB(bgColor, alpha)}`}} >
                <div className="position-absolute bottom pb-5 mb-3">
                    <div 
                        className="col-lg-11 col-xl-10 mx-auto text-white">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7">
                            <h1 className="col-12 px-0">Finding your Major Can be Tough</h1>
                            <p className="h4 font-weight-light">
                                <span className="font-weight-bolder">
                                    Let us help you.
                                </span>
                                &nbsp;MyMajor.com is a site to help you build your future. Learn 
                                more about the majors and careers offered at UW and find what path 
                                is right for you.
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Banner;