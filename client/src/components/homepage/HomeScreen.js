import React, {Component} from 'react';
import NavWithBanner from '../shared/NavWithBanner';
import DescriptionBlock from '../shared/DescriptionBlock';
import ContentCard from '../shared/ContentCard';
import Feedback from '../shared/Feedback';
import FeaturedMajor from './FeaturedMajor';
import { NavLink as RRNavLink } from 'react-router-dom';
        
class HomeScreen extends Component {

    render() {
        return (
            <React.Fragment>
                <NavWithBanner
                    bannerDesc="MyMajor.com is a site to help you build your future. Learn 
                        more about the majors and careers offered at UW and find what path 
                        is right for you."
                    bannerHeading="Let us help you."
                    bannerTitle="Finding your Major Can be Tough"
                    bgImg="./assets/React-icon.png" />    
                <DescriptionBlock 
                    heading="We get it." 
                    content="Knowing what classes to take and what career to pursue can be hard.
                        This site is a resource for finding out what interests you and what majors 
                        align to those interests. We're here to help you find out what classes you 
                        need to take, which directions you might want to explore, and what your 
                        major will lead you in your future. This is the all-in-one place to 
                        finding and deciding your classes and majors at UW." />
                <div className="container">
                    <RRNavLink className="icon" to="/major-quiz">
                        <ContentCard 
                            image="./assets/React-icon.png"
                            title="Take Our Majors Quiz"
                            heading="Don't know where to start?" 
                            description="Our major quiz can give you a helping hand on finding out what 
                                your interests can tell you about your possible majors." 
                            className="col-md-5" 
                            overlayColor="" />
                    </RRNavLink>
                    <div className="d-inline-block col-2"></div>
                    <RRNavLink className="icon" to="/resources">
                        <ContentCard 
                            image="./assets/Logos-FeatureImage.png"
                            title="Class Resources"
                            heading="Looking for opportunities and help for the quarter?"
                            description="In our class resources page, find notes, areas, and 
                                opportunities that students like you have found, specific to your 
                                department and major."
                            className="col-md-5" 
                            overlayColor="" />
                    </RRNavLink>
                </div>
                <Feedback />
            </React.Fragment>
        );
    }
}

export default HomeScreen;