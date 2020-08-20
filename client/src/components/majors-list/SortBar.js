import React from 'react';
import SortButton from './SortButton';

const SortBar = (props) => {

    const {
        handleClick
    } = props;

    return(
        <div className="col-11 col-lg-10 my-4 mx-auto h4">
            <p className="font-weight-bold text-theme">
                Sort By:
            </p>
            <div className="d-flex col-12 col-md-8 col-lg-7 col-xl-6 p-0 justify-content-between">
                <SortButton value="capacityConstrained" label="Capacity-constrained" handleClick={handleClick} />
                <SortButton value="minorAvailable" label="Minor Available" handleClick={handleClick} />
            </div>
        </div>
    );
}

export default SortBar;