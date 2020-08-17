import React, {Component} from 'react';
        
class MajorDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            heading: this.props.heading
        };
    }

    render() {
        return (
            <div className="py-3 py-lg-4">
                <div className="bg-theme text-white h4 p-3 pb-4 mb-0">
                    {this.state.heading}
                </div>
                <div className="bg-gray text-theme p-2">
                    {this.state.content}
                </div>
            </div>
        );
    }
}

export default MajorDetails;