import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/name/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
