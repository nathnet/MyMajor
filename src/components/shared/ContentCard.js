import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class ShowcaseCard extends Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = {
            image: this.props.image,
            title: this.props.title,
            heading: this.props.heading,
            description: this.props.description,
            colSize: this.props.colSize,
            height: 0
        };
    }

    render() {

        return (
            <div className={`d-md-inline-block ${this.state.colSize}`}>
                <Card className="border-0">
                    <div className="position-relative shadow-br embed-responsive embed-responsive-16by9" ref={this.imgRef}>
                        <CardImg top src={this.state.image} className="d-block embed-responsive-item" />
                        <CardImgOverlay>
                            <CardTitle className="font-weight-bold text-white h4">{this.props.title}</CardTitle>
                        </CardImgOverlay>
                    </div>
                    <CardBody className="px-0">
                        <CardText>
                            <span className="font-weight-bold text-theme">
                                {this.state.heading}
                            </span>
                            &nbsp;
                            {this.state.description}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ShowcaseCard;