import React, {Component} from 'react';
        
class RelStudies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {

        let count = 0;

        const renderStudies = this.state.content.map((major) => {
            count++;
            return(
                major.length > 0 ? 
                <div className="py-1">
                    <span className="d-inline-block p-1 border border-1 rounded-circle border-theme text-circle">
                        <p className="m-0">
                            {count}
                        </p>
                    </span>
                    <span className="offset-2 font-weight-bolder">
                        {major}
                    </span>
                </div> : ""
            );
        });

        return (
            <div className="col-10 mx-auto h5 py-2">
                {renderStudies}
            </div>
        );
    }
}

export default RelStudies;