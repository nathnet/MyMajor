import React, {Component} from 'react';
import './App.css';
import HomeScreen from './components/homepage/HomeScreen';
import MajorsListScreen from './components/majors-list/MajorsListScreen';
import MajorSpecificsScreen from './components/major-specifics/MajorSpecificsScreen';
import MajorQuizScreen from './components/major-quiz/MajorQuizScreen';
import ResourcesScreen from './components/resources/ResourcesScreen';
import ErrorScreen from './components/error/ErrorScreen';
import Footer from './components/shared/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MAJOR_SPECIFICS } from './shared/majorSpecifics';
import { RESOURCES } from './shared/resources';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      majors: MAJOR_SPECIFICS,
      resources: RESOURCES
    }
  }

  render() {

    const majorsList = () => {
      return(
        <MajorsListScreen list={this.state.majors} />
      );
    }

    const specifiedMajor = ({ match }) => {
      const specificMajor = this.state.majors.filter((majorName) => 
        majorName.major.toLowerCase() === match.params.major)[0];

      return(
        !specificMajor ? <Route component={HomeScreen} /> : <MajorSpecificsScreen major={specificMajor} />
      );
    }

    const resourcesList = () => {
      const resourcesList = this.state.resources.filter((resource) => 
        resource.category.toLowerCase() === "general")[0];

      return(
        <ResourcesScreen list={resourcesList} />
      );
    }

    return (
      <BrowserRouter>
        <div className="position-relative min-vh-100">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/majors" component={majorsList} />
              <Route path="/majors/:major" component={specifiedMajor} />
              <Route exact path="/major-quiz" component={MajorQuizScreen} />
              <Route exact path="/resources" component={resourcesList} />
              <Route component={ErrorScreen} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
