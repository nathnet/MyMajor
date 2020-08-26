import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { Collapse } from 'react-bootstrap'

const ResourceCard = (props) => {

    const {
        className,
        image,
        list,
        title
    } = props

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const renderList = list.map((resource) => {
        return(
            <li className="px-0 pt-1 pb-2 list-unstyled" key={resource.name}>
                <a className="text-black" href={resource.link}>
                    {resource.name}
                </a>
            </li>
        );
    });

    return(
        <div className={`d-md-inline-block px-0 py-4 w-100 ${className}`}>
            <Card className="border-0 shadow-br">
                <div className="bg-theme text-center py-3 embed-responsive embed-responsive-21by9">
                    <CardImgOverlay className="p-3 embed-responsive-item">
                        <div>
                            <CardImg className="icon-size" src={image} />
                            <CardTitle className="font-weight-normal text-white h5 py-1 mb-0">
                                {title.toUpperCase()}
                            </CardTitle>
                        </div>
                    </CardImgOverlay>
                </div>
                <CardBody className="bg-gray px-0 partial">
                    <Collapse className="px-4 mb-1 text-black" id={title.toLowerCase()} in={isOpen}>
                        <ul className="mb-0">
                            {renderList}
                        </ul>
                    </Collapse>
                    <div 
                        className={`collapsed${isOpen ? " show" : ""}`}
                        type="button"
                        onClick={toggle}
                        >
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default ResourceCard;