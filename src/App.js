import './App.css';
import Home from './Home'
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
           {/*  <Route exact path="/contact">
              <Contact />
            </Route>  */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
