import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';

const MajorCategory = (props) => {

    const {
        category,
        majors 
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const renderMajors = majors.map((major) => {
        return(
            <div key={major.major}>
                <Link to={`/majors/${major.major.toLowerCase()}`}>
                    {major.major}
                </Link>
            </div>
        );
    });

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
        majors.length > 0 ?
        <div className="d-inline-block col-12 col-md-6 px-0 py-3 align-top">
            <div className="col-12 col-md-11">
                <div type="button" onClick={toggle}>
                    <p className="h5 font-weight-bold text-theme">
                        {category}
                    </p>
                    <hr className="bg-theme line-break m-0" />
                </div>
                <Collapse isOpen={isOpen} navbar>
                    <div className="px-2 py-1">
                        {renderMajors}
                    </div>
                </Collapse>
            </div>
        </div>
        : ""
    );
}

export default MajorCategory;