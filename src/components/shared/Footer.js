import React, { Component } from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <footer className="primary-color footer mt-auto py-1">
                <div className="container">
                    <div>
                        <h1 style={{color: '#FFFFFF'}}>Test</h1>
                    </div>
                    <hr className="bg-white" />
                    <div>
                        <h1 style={{color: '#FFFFFF'}}>Test</h1>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;