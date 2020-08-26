import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import PageIntro from '../shared/PageIntro';
import ResourceCard from './ResouceCard';
        
class ResourcesScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        }
    }

    render() {
        const list = this.state.list;

        return (
            <React.Fragment>
                <NavWithBanner
                    bannerTitle="Resources"
                    bgImg="../assets/React-icon.png" />
                <PageIntro 
                    heading="Everything You Need"
                    content="Whether it be financial, academic, or mental assistance that 
                        you need, it's our job to point you in the proper direction for where 
                        you may look for help. Countless organizations, UW-affiliated and 
                        beyond, are who you need right here." />
                <div className="d-flex col-11 col-lg-10 mx-auto mb-5 flex-wrap justify-content-between">
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.scholarships}
                        name="scholarships"
                        title="SCHOLARSHIPS" />
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.academics}
                        name="academics"
                        title="ACADEMICS" /> 
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.jobsAndInterns}
                        name="jobsAndInterns"
                        title="JOBS / INTERNSHIPS" />
                    <div className="d-none d-md-block col-12" />
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.greekLife}
                        name="greekLife"
                        title="GREEK LIFE" />
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.sportsAndRec}
                        name="sportsAndRec"
                        title="SPORTS AND RECREATIONS" />
                    <ResourceCard
                        className="col-12 col-sm-5 col-md-3"
                        image="./assets/React-icon.png"
                        list={list.clubsAndEvents}
                        name="clubsAndEvents"
                        title="CLUBS AND EVENTS" />
                </div>
            </React.Fragment>
        );
    }
}

export default ResourcesScreen;