import React, { useState } from 'react';

const SortButton = (props) => {

    const {
        handleClick,
        value,
        label
    } = props;

    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
        handleClick(value);
    }

    return(
        <div 
            type="button"
            className={`d-inline-flex col-5 p-3 rounded-xl word-break option${active ? " active" : ""}`}
            onClick={toggle}>
            <p className="p-0 m-0 text-white text-center align-self-center">
                {label}
            </p>
        </div>
    );
}

export default SortButton;