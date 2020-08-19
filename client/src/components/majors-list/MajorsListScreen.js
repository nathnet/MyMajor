import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import MajorCategory from './MajorCategory';
        
class MajorsListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        }
    }

    render() {

        const list = (props) => {
            const specificList = this.state.list.filter((majorName) => 
                majorName.category.includes(props));

            return(
                specificList
            );
        }

        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Majors List"
                    bgImg="./assets/React-icon.png" />
                <PageIntro
                    heading="All Your Options in One Place"
                    content="At UW, the major is your first step into a boundless career. 
                        But what majors UW offers can be a tricky subject. Here you'll find 
                        every major that UW has to offer and can easily sort and see what 
                        majors might pique your interest." />
                <div className="col-11 col-lg-10 my-5 py-1 mx-auto">
                    <div className="d-inline-block col-12 col-md-6 px-0 align-top">
                        <MajorCategory category="The Arts" majors={list("The Arts")} />
                        <MajorCategory category="Business" majors={list("Business")} />
                        <MajorCategory category="Engineering" majors={list("Engineering")} />
                        <MajorCategory category="Language and Literature" majors={list("Language and Literature")} />
                        <MajorCategory category="Physical Sciences" majors={list("Physical Sciences")} />
                    </div>
                    <div className="d-inline-block col-12 col-md-6 px-0 align-top">
                        <MajorCategory category="Biological and Environmental Sciences" majors={list("Biological and Environmental Sciences")} />
                        <MajorCategory category="Computing" majors={list("Computing")} />
                        <MajorCategory category="Health Sciences" majors={list("Health Sciences")} />
                        <MajorCategory category="Math" majors={list("Math")} />
                        <MajorCategory category="Social Sciences" majors={list("Social Sciences")} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MajorsListScreen;