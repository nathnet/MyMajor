import React, {Component} from 'react';
import './App.css';
import HomeScreen from './components/homepage/HomeScreen';
import MajorsListScreen from './components/majors-list/MajorsListScreen';
import MajorSpecificsScreen from './components/major-specifics/MajorSpecificsScreen';
import ResourcesScreen from './components/resources/ResourcesScreen';
import Footer from './components/shared/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="position-relative min-vh-100">
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/majors" component={MajorsListScreen} />
              <Route path="/majors/:majorId" component={MajorSpecificsScreen} />
              <Route exact path="/resources" component={ResourcesScreen} />
            </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
