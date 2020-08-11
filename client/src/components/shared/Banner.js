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
        <div className="" style={{}}>
            <Jumbotron 
                className={`w-100 bg-no-repeat bg-center ${className} position-relative`}
                style={{ backgroundImage: `url(${bgImg})`,  backgroundColor: `${hexToRGB(bgColor, alpha)}`}} >
                <div className="position-absolute right bottom left pb-5 mb-3">
                    <div 
                        className="col-11 col-lg-10 mx-auto text-white">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-7 px-0">
                            <h1 className="col-12 px-0">{bannerTitle}</h1>
                            {(bannerDesc || bannerHeading) ? 
                                <p className="h4 font-weight-light">
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