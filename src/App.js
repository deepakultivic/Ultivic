
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from './components/Scrolltotop'
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Portfolio from './pages/Portfolio';
import Projects from './pages/projects';
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
import { ToastContainer } from "react-toastify";
import Portfolio_template from "./pages/Portfolio_template";
import Employee_template from "./pages/Employee_template";
import NoMatchPage from "./components/NoMatch/NoMatchPage";
import Filter from "./pages/Portfolio/filter";
import Leads from "./pages/Leads";
import Privacy from "./pages/Privacy";
// const NoMatchPage = () => {
//   return (
//     <h3>404 - Not found</h3>
//   );
// };

function App(props) {
  const history = createBrowserHistory();
  const TRACKING_ID = "G-1RYT8ZCNC1";
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
          <ScrollToTop />
          <ToastContainer />
          <RouteChangeTracker />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/projects/:title" exact component={Projects} />
            <Route path="/web" exact component={Web} />
            <Route path="/app" exact component={App_dev} />
            <Route path="/graphic" exact component={Graphic} />
            <Route path="/blogs" exact component={Our_blogs} />
            <Route path="/career" exact component={Career} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/portfolio_template/:slug" exact component={Portfolio_template} />
            <Route path="/employee_template/:emp_id" exact component={Employee_template} />
            <Route exact path="/blog/:title" component={Blogtemplate} />
            <Route path="/carrer/:id" exact component={Jobs} />
            <Route path='/leads' exact component={Leads} />
            <Route path='/filter' exact component={Filter} />
            <Route path='/privacy-policy' exact component={Privacy} />
            <Route component={NoMatchPage} />
          </Switch>
        </BrowserRouter>
    
    </div>
  );
}

export default App;


