import './App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlaceToStay from './PlaceToStay';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/placeToStay">
                <PlaceToStay />
              </Route>
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
