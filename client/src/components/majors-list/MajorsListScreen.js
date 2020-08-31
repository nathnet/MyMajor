import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import MajorCategory from './MajorCategory';
import SortBar from './SortBar';
        
class MajorsListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: [],
            list: this.props.list
        }
    }

    render() {

        const toggleActive = (id) => {
            let array = this.state.active;
            
            if (!array.includes(id)) {
                array.push(id);
            } else {
                let pos = array.indexOf(id);
                array.splice(pos, 1);
            }

            this.setState({
                active: array
            });
        }

        const list = (props) => {
            let specificList = this.state.list.filter((majorName) => 
                majorName.category.includes(props));

            for (let i = 0; i < this.state.active.length; i++) {
                specificList = specificList.filter((majorName) => {
                    return(
                        majorName.hasOwnProperty("options") ? 
                        (
                            majorName.options.includes(this.state.active[i]) ?
                            majorName : ""
                        ) : ""
                    );
                });
            }

            return(
                specificList
            );
        }

        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Majors List"
                    bgImg="./assets/pexels-lumn-327882.jpg" />
                <PageIntro
                    heading="All Your Options in One Place"
                    content="At UW, the major is your first step into a boundless career. 
                        But what majors UW offers can be a tricky subject. Here you'll find 
                        every major that UW has to offer and can easily sort and see what 
                        majors might pique your interest." />
                <SortBar handleClick={toggleActive} />
                <div className="col-11 col-lg-10 my-4 py-1 mx-auto">
                    <MajorCategory category="The Arts" majors={list("The Arts")} />
                    <MajorCategory category="Biological and Environmental Sciences" majors={list("Biological and Environmental Sciences")} />
                    <MajorCategory category="Business" majors={list("Business")} />
                    <MajorCategory category="Computing" majors={list("Computing")} />
                    <MajorCategory category="Engineering" majors={list("Engineering")} />
                    <MajorCategory category="Health Sciences" majors={list("Health Sciences")} />
                    <MajorCategory category="Language and Literature" majors={list("Language and Literature")} />
                    <MajorCategory category="Math" majors={list("Math")} />
                    <MajorCategory category="Physical Sciences" majors={list("Physical Sciences")} />
                    <MajorCategory category="Social Sciences" majors={list("Social Sciences")} />
                </div>
            </React.Fragment>
        );
    }
}

export default MajorsListScreen;