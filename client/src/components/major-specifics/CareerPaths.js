import React, {Component} from 'react';
        
class CareerPaths extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        };
    }

    render() {

        const renderCareers = this.state.content.map((career) => {
            return(
                career.length > 0 ?
                <div className="d-inline-block bg-theme px-2 py-1 mx-2 my-1 rounded" key={career}>
                    {career}
                </div> : ""
            );
        });

        return (
            <div className="col py-2 text-white">
                {renderCareers}
            </div>
        );
    }
}

export default CareerPaths;