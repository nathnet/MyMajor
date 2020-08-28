import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

const QuizCategoryBlock = (props) => {

    const {
        category,
        className,
        float,
        link
    } = props;

    const thisLink = link ? link : category.toLowerCase();

    return(
        <RRNavLink className="icon" to={`/major-quiz/${thisLink}`}>
            <div className={`d-inline-block px-0 pt-2 pb-3 ${className}`}>
                <div 
                    className={`${float ? "col-md-11" : "col-12"} py-4 text-black shadow-br ` +
                        `border border-1 border-theme-light text-center clearfix ${float}`}>
                    {category}
                </div>
            </div>
        </RRNavLink>
    );
}

export default QuizCategoryBlock;