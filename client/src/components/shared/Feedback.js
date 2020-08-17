import React, { Component } from 'react';

class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <div className="col-10 col-md-8 px-0 px-lg-3 border border-1 border-theme shadow-br mx-auto my-5">
                <div className="container col col-md-11 px-0 px-lg-3 py-3 text-theme align-middle">
                    <div className="d-inline-block col col-xl-auto px-2">
                        <div className="d-flex justify-content-center">
                            <div className="d-inline-block">
                                <h1 className="w-auto p-3 border border-2 border-theme rounded-circle">
                                    PIC
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-block px-4 pb-2 col col-xl-9 text-center text-xl-left align-middle">
                        <p className="h4 my-auto">
                            We use data and feedback from&nbsp;
                            <span className="font-weight-bold">students like you.</span>
                        </p>
                        <p>
                            By taking in your experience, 
                            we make sure our information is 100% authentic.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;