import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Immunization';
import BlogDetails from './BlogDetails';
import HealthProfessional from './HealthProfessional';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/immunization">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/hp">
              <HealthProfessional />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
