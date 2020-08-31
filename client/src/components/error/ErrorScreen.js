import React, {Component} from 'react';
import TopNavbar from '../shared/TopNavbar';
        
class ResourcesScreen extends Component {


    render() {
        return (
            <React.Fragment>
                <TopNavbar bgColor="#FFF" dark={false} />
                <div className="bg-fit bg-position-bottom" style={{backgroundImage: `url(${require("../../assets/404_background.jpg")})`}}>
                    <div className="d-inline-block col-12 col-md-6 p-0 h-100 align-middle">
                        <img 
                            className="w-100 pb-md-5 mb-lg-2 mb-xl-4" 
                            src={require("../../assets/404_dino.png")} 
                            alt="error dino" />
                    </div>
                    <div className="d-inline-block col-12 col-md-6 pb-lg-5 mb-lg-5 align-middle">
                        <div className="col-12 col-sm-11 pb-5 mb-5 mx-auto">
                            <div className="py-4 h1 text-theme font-weight-bold">
                                PAGE NOT FOUND
                            </div>
                            <p className="h5 py-2">
                                We looked everywhere for this page, but it's just not turning up!
                            </p>
                            <p className="h5 py-2">
                                Try going back to the previous page or hit random buttons.
                                Sometimes that works.
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ResourcesScreen;