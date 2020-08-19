import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

const ContentCard = (props) => {

    const {
        image,
        title,
        heading,
        description,
        className
    } = props

    return (
        <div className={`d-md-inline-block px-0 ${className}`}>
            <Card className="border-0">
                <div className="shadow-br embed-responsive embed-responsive-16by9">
                    <CardImg 
                        top 
                        src={image} 
                        className="d-block embed-responsive-item hide-overflow-pic" 
                        alt={title} />
                    <CardImgOverlay>
                        <CardTitle className="font-weight-bold text-white h4">{title}</CardTitle>
                    </CardImgOverlay>
                </div>
                <CardBody className="px-0">
                    <CardText className="text-black">
                        <span className="font-weight-bold text-theme">
                            {heading}
                        </span>
                        &nbsp;
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );

}

export default ContentCard;