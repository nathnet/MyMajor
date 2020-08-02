import React, {Component} from 'react';
import './App.css';
import TopNavbar from './components/shared/TopNavbar';
import Footer from './components/shared/Footer';
import Feedback from './components/shared/Feedback';
import DescriptionBox from './components/homepage/DescriptionBox';

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
        <div className="py-2">
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
          <br />
          <h2>Test</h2>
        </div>
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default App;
