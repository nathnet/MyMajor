import React from 'react';

const SortButton = (props) => {

    const {
        label
    } = props;

    return(
        <div 
            className="d-inline-flex col-5 p-3 rounded-xl option">
            <p className="p-0 m-0 text-white text-center">
                {label}
            </p>
        </div>
    );
}

export default SortButton;