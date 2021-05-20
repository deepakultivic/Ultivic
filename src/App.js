
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Portfolio from './pages/Portfolio';
import Web from './pages/Web_development';
import App_dev from './pages/App_development';
import Graphic from './pages/Graphic_designer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/web" exact component={Web} />
        <Route path="/app" exact component={App_dev} />
        <Route path="/graphic" exact component={Graphic} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
