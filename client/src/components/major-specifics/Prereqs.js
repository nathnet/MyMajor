import React, {Component} from 'react';
        
class Prereqs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {
        return (
            <div className="col">
                <div>
                    <p className="font-weight-bolder">
                        {this.state.content.announcement}
                    </p>
                </div>
                <div className="py-2 text-vstretch">
                    <p>
                        <span className="font-weight-bolder">
                            Minimum GPA:&nbsp;
                        </span>
                        {this.state.content.minGPA}
                        <br />
                        <span className="font-weight-bolder">
                            Personal Statement:&nbsp;
                        </span>
                        {this.state.content.personalStatement}
                        <br />
                        <span className="font-weight-bolder">
                            Transcript:&nbsp;
                        </span>
                        {this.state.content.transcript}
                    </p>
                </div>
                <div className="py-2 text-vstretch">
                    <p>
                        <span className="font-weight-bolder">
                            Classes:&nbsp;
                        </span>
                        <br />
                        {this.state.content.classes}
                    </p>
                </div>
            </div>
        );
    }
}

export default Prereqs;