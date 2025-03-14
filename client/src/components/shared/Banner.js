import React from 'react';
import { Jumbotron } from 'reactstrap';

const Banner = (props) => {

    const {
        alpha,
        bannerDesc,
        bannerHeading,
        bannerTitle,
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
        <div className="">
            <Jumbotron 
                className={`w-100 bg-no-repeat bg-center ${className} position-relative`}
                style={{ backgroundImage: `url(${bgImg})`,  backgroundColor: `${hexToRGB(bgColor, alpha)}`}} >
                <div className="position-absolute right bottom left pb-0 pb-lg-5 mb-3">
                    <div 
                        className="col-11 col-lg-10 mx-auto text-white">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 px-0">
                            <p className="col-12 h3 h1-md px-0">{bannerTitle}</p>
                            {(bannerDesc || bannerHeading) ? 
                                <p className="h5 h4-md font-weight-light">
                                    <span className="font-weight-bolder">
                                        {bannerHeading}
                                    </span>
                                    &nbsp;
                                    {bannerDesc}
                                </p>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </div>
    );
}

export default Banner;