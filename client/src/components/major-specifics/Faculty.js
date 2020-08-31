import React, {Component} from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as HumanIcon } from '../../assets/human.svg';
        
class Faculty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {

        const items = [];

        for (let i = 0; i < this.state.content.studentRatio; i++) {
            items.push(<SvgIcon component={HumanIcon} viewBox="0 0 547 800" className="MuiSvgIcon-fontSizeExtraLarge" />)
        }

        return (
            <div className="col mx-auto py-2">
                <div>
                    <div className="d-inline-block col-4 px-0">
                        <SvgIcon component={HumanIcon} viewBox="0 0 547 800" className="w-100 h-100" />
                    </div>
                    <div className="d-inline-block col-8 px-0 align-middle">
                        {items}  
                    </div>
                </div>
                <div className="col-11 mx-auto py-1">
                    <div className="h4">
                        {this.state.content.studentRatio}:1 Student-Faculty Ratio
                    </div>
                    <div className="h5">
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.professors}
                        </span>
                        <span>
                            Professors
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.researchProfs}
                        </span>
                        <span>
                            Research Professors
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.associateProfs}
                        </span>
                        <span>
                            Associate Professors
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.researchAssociateProfs}
                        </span>
                        <span>
                            Research Associate Professors
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.assistantProfs}
                        </span>
                        <span>
                            Assistant Professors
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.principalLecturers}
                        </span>
                        <span>
                            Principal Lecturers
                        </span>
                        <br />
                        <span className="d-inline-block col-2 col-sm-1 col-md-2 col-xl-1 pl-0 pr-3 py-1">
                            {this.state.content.emeritusFaculty}
                        </span>
                        <span>
                            Emeritus Faculty
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faculty;