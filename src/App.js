
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ScrollToTop from './components/Scrolltotop'
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Portfolio from './pages/Portfolio';
import Web from './pages/Web_development';
import App_dev from './pages/App_development';
import Graphic from './pages/Graphic_designer';
import Our_blogs from "./pages/Our_blogs";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Blogtemplate from "./pages/Template/Blogtemplate";
import Jobs from "./pages/Template/Jobs";
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import RouteChangeTracker from './components/Googleanalytics';


function App(props) {
  const history = createBrowserHistory();
  const TRACKING_ID = "G-1RYT8ZCNC1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: 3213624477
  }
});
  ReactGA.exception({
      description: 'An error ocurred',
      fatal: true
    });
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <RouteChangeTracker/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/web" exact component={Web} />
        <Route path="/app" exact component={App_dev} />
        <Route path="/graphic" exact component={Graphic} />
        <Route path="/blogs" exact component={Our_blogs} />
        <Route path="/career" exact component={Career} />
        <Route path="/contact" exact component={Contact} />
        <Route exact path="/blog/:id"  component={Blogtemplate} />
        <Route path="/carrer/:id" exact component={Jobs} />
      </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
