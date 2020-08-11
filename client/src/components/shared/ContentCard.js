import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class ShowcaseCard extends Component {

    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = {
            attributes: this.props.attributes,
            image: this.props.image,
            title: this.props.title,
            heading: this.props.heading,
            description: this.props.description,
            className: this.props.className,
            height: 0
        };
    }

    render() {

        return (
            <div className={`d-md-inline-block ${this.state.className}`} {...this.state.attributes}>
                <Card className="border-0">
                    <div className="shadow-br embed-responsive embed-responsive-16by9">
                        <CardImg 
                            top 
                            src={this.state.image} 
                            className="d-block embed-responsive-item hide-overflow-pic" 
                            alt={this.state.title} />
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