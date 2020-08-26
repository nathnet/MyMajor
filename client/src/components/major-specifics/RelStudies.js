import React, {Component} from 'react';
        
class RelStudies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {

        const renderStudies = this.state.content.map((major, rank) => {
            return(
                major.length > 0 ? 
                <div className="py-1">
                    <span className="d-inline-block p-1 border border-1 rounded-circle border-theme text-circle">
                        <p className="m-0">
                            {rank + 1}
                        </p>
                    </span>
                    <div className="d-inline-block px-0 offset-2 col-8 font-weight-bolder align-middle">
                        {major}
                    </div>
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