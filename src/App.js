import React, {Component} from 'react';
import './App.css';
import TopNavbar from './components/shared/TopNavbar';
import DescriptionBox from './components/homepage/DescriptionBox';
import ContentCard from './components/shared/ContentCard';
import Feedback from './components/shared/Feedback';
import Footer from './components/shared/Footer';

class App extends Component {

  render() {

    return (
      <div className="position-relative min-vh-100">
        <TopNavbar />
        <DescriptionBox 
          heading="We get it." 
          content="Knowing what classes to take and what career to pursue can be hard.
            This site is a resource for finding out what interests you and what majors 
            align to those interests. We're here to help you find out what classes you 
            need to take, which directions you might want to explore, and what your 
            major will lead you in your future. This is the all-in-one place to 
            finding and deciding your classes and majors at UW." />
        <div className="container">
          <ContentCard 
            image="./assets/React-icon.png"
            title="Take Our Majors Quiz"
            heading="Don't know where to start?" 
            description="Our major quiz can give you a helping hand on finding out what 
            your interests can tell you about your possible majors." 
            colSize="col-md-5" 
            overlayColor="" />
          <div className="d-inline-block col-2"></div>
          <ContentCard 
            image="./assets/Logos-FeatureImage.png"
            title="Class Resources"
            heading="Looking for opportunities and help for the quarter?"
            description="In our class resources page, find notes, areas, and 
            opportunities that students like you have found, specific to your 
            department and major."
            colSize="col-md-5" 
            overlayColor="" />
        </div>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default App;
