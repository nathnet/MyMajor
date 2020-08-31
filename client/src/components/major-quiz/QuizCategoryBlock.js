import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

const QuizCategoryBlock = (props) => {

    const {
        category,
        className,
        float,
        full,
        link
    } = props;

    const thisLink = link ? link : category.toLowerCase();

    return(
        <div className={`d-inline-block px-0 pt-2 pb-3 ${className}`}>
            <RRNavLink className="icon" to={`/major-quiz/${thisLink}`}>    
                <div 
                    className={`${full ? "col-12" : "col-md-11"} py-4 text-black shadow-br ` +
                        `border border-1 border-theme-light text-center clearfix ${float}`}>
                    {category}
                </div>
            </RRNavLink>
        </div>
    );
}

export default QuizCategoryBlock;