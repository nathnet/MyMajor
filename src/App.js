import React, {Component} from 'react';
import './App.css';
import TopNavbar from './components/shared/TopNavbar';
import Footer from './components/shared/Footer';
import Feedback from './components/shared/Feedback';

class App extends Component {

  render() {

    return (
      <div className="position-relative min-vh-100">
        <TopNavbar />
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
