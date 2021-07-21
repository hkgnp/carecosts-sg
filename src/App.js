import './App.css';
import Questions from './Questions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <header className="App-header">
            <Route exact path="/" component={Questions} />
            <Route exact path="/contact" component={Contact} />
          </header>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
