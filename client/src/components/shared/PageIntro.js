import React, { Component } from 'react';

class PageIntro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heading: this.props.heading,
            content: this.props.content
        };
    }

    render() {

        return (
            <div className="col-11 col-lg-10 my-4 py-4 mx-auto">
                <p className="h4 font-weight-bold text-theme">
                    {this.state.heading}
                </p>
                <hr className="bg-theme short-line-break m-0" />
                <p className="py-2">
                    {this.state.content}
                </p>
            </div>
        );
    }
}

export default PageIntro;