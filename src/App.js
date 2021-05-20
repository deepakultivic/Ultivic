
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Portfolio from './pages/Portfolio'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
