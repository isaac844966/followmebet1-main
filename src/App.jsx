import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import Navbar from "./components/Navbar";
import {
  Terms,
  Privacy,
  Error,
  Rules,
  Contact,
  Download,
  HomeLayout,
  Payment
} from "./pages";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollTop />
        <Switch>
          <Route exact path='/' component={HomeLayout} />
          <Route path='/rules' component={Rules} />
          <Route path='/terms' component={Terms} />
          <Route  path='/privacy' component={Privacy} />
          <Route  path='/payment' component={Payment} />
          <Route  path='/contact' component={Contact} />
          <Route path='/download' component={Download} />
          <Route path='*' component={Error} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
