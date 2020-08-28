import React, { Component } from 'react';

class DescriptionBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.heading,
            content: this.props.content
        };
    }

    render() {

        return (
            <div className="col-11 col-md-9 col-lg-8 col-xl-6 container my-5 py-4">
                <p>
                    <span className="font-weight-bold text-theme">{this.state.heading}</span>
                    &nbsp;
                    {this.state.content}
                </p>
            </div>
        );
    }
}

export default DescriptionBlock;