import React, {Component} from 'react';
        
class StudentDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {
        return (
            <div className="col-11 py-2">
                <div className="py-1">
                    <span className="col-3 col-lg-2 d-inline-block mr-auto h5">
                        {this.state.content.undergrad}
                    </span>
                    <span className="d-inline-block offset-1">
                        Undergraduate Majors
                    </span>
                </div>
                <div className="py-1">
                    <span className="col-3 col-lg-2 d-inline-block mr-auto h5">
                        {this.state.content.doctoral}
                    </span>
                    <span className="d-inline-block offset-1">
                        Doctoral Students
                    </span>
                </div>
            </div>
        );
    }
}

export default StudentDetails;