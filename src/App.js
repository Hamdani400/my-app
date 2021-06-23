import React from 'react';
import 'assets/scss/style.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from 'Pages/LandingPage';
import DetailsPage from 'Pages/DetailsPage';

function App () {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
      </Router>
    </div>
  );
}

export default App;
